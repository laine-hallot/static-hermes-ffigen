#!/usr/bin/env node
import type { ElementContent } from "xast";

import { fromXml } from "xast-util-from-xml";
import { toXml } from "xast-util-to-xml";

const readStdIn = async () => {
  let data = "";
  for await (const chunk of process.stdin) data += chunk;
  return data;
};

const XMLdata = await readStdIn();

const tree = fromXml(XMLdata);

const isFloat128 = (elem: ElementContent | undefined): boolean => {
  if (
    elem !== undefined &&
    elem.type === "element" &&
    elem.name === "FundamentalType" &&
    elem.attributes.name === "__float128"
  ) {
    return true;
  }
  return false;
};

const processTypes = (
  child: ElementContent,
  index: number,
  arr: ElementContent[]
): { didPatch: boolean; elem: ElementContent } => {
  if (child.type === "element" && child.name === "Unimplemented") {
    // 2 instead of 1 to account for newline elements in ast
    if (!isFloat128(arr[index + 2])) {
      console.error(
        '\x1b[1;33mWarning:\x1b[0m \x1b[1m<Unimplemented/>\x1b[0m is not proceeded by \x1b[1m<FundamentalType name="__float128"/>\x1b[0m'
      );
      console.error(
        "\x1b[0;33mApplying patch anyways but this probably means theres something wrong.\x1b[0m"
      );
    }

    return {
      didPatch: true,
      elem: {
        type: "element",
        name: "FundamentalType",
        attributes: {
          id: child.attributes.id,
          name: "_Complex _Float128",
          size: "128",
          align: "128",
        },
        children: [],
      },
    };
  }
  return { didPatch: true, elem: child };
};

let didPatchTypeDef = false;
const fixed = tree.children.map((rootChild) => {
  if (rootChild.type === "element" && rootChild.name === "GCC_XML") {
    return {
      ...rootChild,
      children: rootChild.children.map((child, index, arr) => {
        const { elem, didPatch } = processTypes(child, index, arr);
        didPatchTypeDef = didPatch ? true : didPatchTypeDef;
        return elem;
      }),
    };
  }

  return rootChild;
});

if (!didPatchTypeDef) {
  console.error(
    "\x1b[1;33mWarning:\x1b[0m Never encountered \x1b[1m<Unimplemented/>\x1b[0m"
  );
  console.error("\x1b[0;33mdid not apply patch to xml \x1b[0m");
}

const finalXml = toXml(fixed);

process.stdout.write(finalXml);
