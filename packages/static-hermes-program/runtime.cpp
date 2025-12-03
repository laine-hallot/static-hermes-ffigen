#include <hermes/hermes.h>
#include <hermes/VM/static_h.h>
#include <hermes/Public/RuntimeConfig.h>
#include <jsi/jsi.h>
#include <MappedFileBuffer.h>

#include <cmath>
#include <climits>
#include <vector>
#include <unistd.h>
#include <string>
#include <filesystem>


extern "C" SHUnit *sh_export_ffigenexample(void);

std::string getExecutablePath()
{
  char result[ PATH_MAX ];
  ssize_t count = readlink( "/proc/self/exe", result, PATH_MAX );
  std::string exePath = std::string( result, (count > 0) ? count : 0 );
  std::filesystem::path p = exePath;
  std::filesystem::path parent_p = p.parent_path();
  return parent_p.string();
}

int main(int argc, char *argv[]) {
  // Enable microtask queue for Promise support
  auto runtimeConfig = std::make_unique<hermes::vm::RuntimeConfig>();
  SHRuntime *shr = _sh_init(*runtimeConfig);
  facebook::hermes::HermesRuntime *hermes = _sh_get_hermes_runtime(shr);

  hermes->evaluateSHUnit(sh_export_ffigenexample);

  std::string sourceURL = std::string("source-url.com");

  std::string jsPath =   getExecutablePath() + "/index.js";
  auto buffer = mapFileBuffer(jsPath.c_str(), true);

  std::string sourceMapPath = std::string(jsPath) + ".map";
  std::shared_ptr<const facebook::jsi::Buffer> sourceMapBuf;

  bool hasSourceMap = false;
  try {
    sourceMapBuf = mapFileBuffer(sourceMapPath.c_str(), true);
  } catch (const std::exception &e) {
    printf("Source map not found: %s\n", e.what());
  }

  hermes->evaluateJavaScriptWithSourceMap(buffer, sourceMapBuf, sourceURL);

  _sh_done(shr);
  return 1;
}
