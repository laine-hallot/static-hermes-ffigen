const _wl_event_queue_destroy = $SHBuiltin.extern_c({}, function wl_event_queue_destroy(_queue: c_ptr): void { throw 0; });
const _wl_proxy_marshal_flags = $SHBuiltin.extern_c({}, function wl_proxy_marshal_flags(_proxy: c_ptr, _opcode: c_uint, _interface: c_ptr, _version: c_uint, _flags: c_uint): c_ptr { throw 0; });
const _wl_proxy_marshal_array_flags = $SHBuiltin.extern_c({}, function wl_proxy_marshal_array_flags(_proxy: c_ptr, _opcode: c_uint, _interface: c_ptr, _version: c_uint, _flags: c_uint, _args: c_ptr): c_ptr { throw 0; });
const _wl_proxy_marshal = $SHBuiltin.extern_c({}, function wl_proxy_marshal(_p: c_ptr, _opcode: c_uint): void { throw 0; });
const _wl_proxy_marshal_array = $SHBuiltin.extern_c({}, function wl_proxy_marshal_array(_p: c_ptr, _opcode: c_uint, _args: c_ptr): void { throw 0; });
const _wl_proxy_create = $SHBuiltin.extern_c({}, function wl_proxy_create(_factory: c_ptr, _interface: c_ptr): c_ptr { throw 0; });
const _wl_proxy_create_wrapper = $SHBuiltin.extern_c({}, function wl_proxy_create_wrapper(_proxy: c_ptr): c_ptr { throw 0; });
const _wl_proxy_wrapper_destroy = $SHBuiltin.extern_c({}, function wl_proxy_wrapper_destroy(_proxy_wrapper: c_ptr): void { throw 0; });
const _wl_proxy_marshal_constructor = $SHBuiltin.extern_c({}, function wl_proxy_marshal_constructor(_proxy: c_ptr, _opcode: c_uint, _interface: c_ptr): c_ptr { throw 0; });
const _wl_proxy_marshal_constructor_versioned = $SHBuiltin.extern_c({}, function wl_proxy_marshal_constructor_versioned(_proxy: c_ptr, _opcode: c_uint, _interface: c_ptr, _version: c_uint): c_ptr { throw 0; });
const _wl_proxy_marshal_array_constructor = $SHBuiltin.extern_c({}, function wl_proxy_marshal_array_constructor(_proxy: c_ptr, _opcode: c_uint, _args: c_ptr, _interface: c_ptr): c_ptr { throw 0; });
const _wl_proxy_marshal_array_constructor_versioned = $SHBuiltin.extern_c({}, function wl_proxy_marshal_array_constructor_versioned(_proxy: c_ptr, _opcode: c_uint, _args: c_ptr, _interface: c_ptr, _version: c_uint): c_ptr { throw 0; });
const _wl_proxy_destroy = $SHBuiltin.extern_c({}, function wl_proxy_destroy(_proxy: c_ptr): void { throw 0; });
const _wl_proxy_add_listener = $SHBuiltin.extern_c({}, function wl_proxy_add_listener(_proxy: c_ptr, _implementation: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_proxy_get_listener = $SHBuiltin.extern_c({}, function wl_proxy_get_listener(_proxy: c_ptr): c_ptr { throw 0; });
const _wl_proxy_add_dispatcher = $SHBuiltin.extern_c({}, function wl_proxy_add_dispatcher(_proxy: c_ptr, _dispatcher_func: c_ptr, _dispatcher_data: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_proxy_set_user_data = $SHBuiltin.extern_c({}, function wl_proxy_set_user_data(_proxy: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_proxy_get_user_data = $SHBuiltin.extern_c({}, function wl_proxy_get_user_data(_proxy: c_ptr): c_ptr { throw 0; });
const _wl_proxy_get_version = $SHBuiltin.extern_c({}, function wl_proxy_get_version(_proxy: c_ptr): c_uint { throw 0; });
const _wl_proxy_get_id = $SHBuiltin.extern_c({}, function wl_proxy_get_id(_proxy: c_ptr): c_uint { throw 0; });
const _wl_proxy_set_tag = $SHBuiltin.extern_c({}, function wl_proxy_set_tag(_proxy: c_ptr, _tag: c_ptr): void { throw 0; });
const _wl_proxy_get_tag = $SHBuiltin.extern_c({}, function wl_proxy_get_tag(_proxy: c_ptr): c_ptr { throw 0; });
const _wl_proxy_get_class = $SHBuiltin.extern_c({}, function wl_proxy_get_class(_proxy: c_ptr): c_ptr { throw 0; });
const _wl_proxy_get_interface = $SHBuiltin.extern_c({}, function wl_proxy_get_interface(_proxy: c_ptr): c_ptr { throw 0; });
const _wl_proxy_get_display = $SHBuiltin.extern_c({}, function wl_proxy_get_display(_proxy: c_ptr): c_ptr { throw 0; });
const _wl_proxy_set_queue = $SHBuiltin.extern_c({}, function wl_proxy_set_queue(_proxy: c_ptr, _queue: c_ptr): void { throw 0; });
const _wl_proxy_get_queue = $SHBuiltin.extern_c({}, function wl_proxy_get_queue(_proxy: c_ptr): c_ptr { throw 0; });
const _wl_event_queue_get_name = $SHBuiltin.extern_c({}, function wl_event_queue_get_name(_queue: c_ptr): c_ptr { throw 0; });
const _wl_display_connect = $SHBuiltin.extern_c({}, function wl_display_connect(_name: c_ptr): c_ptr { throw 0; });
const _wl_display_connect_to_fd = $SHBuiltin.extern_c({}, function wl_display_connect_to_fd(_fd: c_int): c_ptr { throw 0; });
const _wl_display_disconnect = $SHBuiltin.extern_c({}, function wl_display_disconnect(_display: c_ptr): void { throw 0; });
const _wl_display_get_fd = $SHBuiltin.extern_c({}, function wl_display_get_fd(_display: c_ptr): c_int { throw 0; });
const _wl_display_dispatch = $SHBuiltin.extern_c({}, function wl_display_dispatch(_display: c_ptr): c_int { throw 0; });
const _wl_display_dispatch_queue = $SHBuiltin.extern_c({}, function wl_display_dispatch_queue(_display: c_ptr, _queue: c_ptr): c_int { throw 0; });
const _wl_display_dispatch_timeout = $SHBuiltin.extern_c({}, function wl_display_dispatch_timeout(_display: c_ptr, _timeout: c_ptr): c_int { throw 0; });
const _wl_display_dispatch_queue_timeout = $SHBuiltin.extern_c({}, function wl_display_dispatch_queue_timeout(_display: c_ptr, _queue: c_ptr, _timeout: c_ptr): c_int { throw 0; });
const _wl_display_dispatch_queue_pending = $SHBuiltin.extern_c({}, function wl_display_dispatch_queue_pending(_display: c_ptr, _queue: c_ptr): c_int { throw 0; });
const _wl_display_dispatch_pending = $SHBuiltin.extern_c({}, function wl_display_dispatch_pending(_display: c_ptr): c_int { throw 0; });
const _wl_display_get_error = $SHBuiltin.extern_c({}, function wl_display_get_error(_display: c_ptr): c_int { throw 0; });
const _wl_display_get_protocol_error = $SHBuiltin.extern_c({}, function wl_display_get_protocol_error(_display: c_ptr, _interface: c_ptr, _id: c_ptr): c_uint { throw 0; });
const _wl_display_flush = $SHBuiltin.extern_c({}, function wl_display_flush(_display: c_ptr): c_int { throw 0; });
const _wl_display_roundtrip_queue = $SHBuiltin.extern_c({}, function wl_display_roundtrip_queue(_display: c_ptr, _queue: c_ptr): c_int { throw 0; });
const _wl_display_roundtrip = $SHBuiltin.extern_c({}, function wl_display_roundtrip(_display: c_ptr): c_int { throw 0; });
const _wl_display_create_queue = $SHBuiltin.extern_c({}, function wl_display_create_queue(_display: c_ptr): c_ptr { throw 0; });
const _wl_display_create_queue_with_name = $SHBuiltin.extern_c({}, function wl_display_create_queue_with_name(_display: c_ptr, _name: c_ptr): c_ptr { throw 0; });
const _wl_display_prepare_read_queue = $SHBuiltin.extern_c({}, function wl_display_prepare_read_queue(_display: c_ptr, _queue: c_ptr): c_int { throw 0; });
const _wl_display_prepare_read = $SHBuiltin.extern_c({}, function wl_display_prepare_read(_display: c_ptr): c_int { throw 0; });
const _wl_display_cancel_read = $SHBuiltin.extern_c({}, function wl_display_cancel_read(_display: c_ptr): void { throw 0; });
const _wl_display_read_events = $SHBuiltin.extern_c({}, function wl_display_read_events(_display: c_ptr): c_int { throw 0; });
const _wl_log_set_handler_client = $SHBuiltin.extern_c({}, function wl_log_set_handler_client(_handler: c_ptr): void { throw 0; });
const _wl_display_set_max_buffer_size = $SHBuiltin.extern_c({}, function wl_display_set_max_buffer_size(_display: c_ptr, _max_buffer_size: c_ulong): void { throw 0; });
const _wl_display_add_listener = $SHBuiltin.extern_c({}, function wl_display_add_listener(_wl_display: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_display_set_user_data = $SHBuiltin.extern_c({}, function wl_display_set_user_data(_wl_display: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_display_get_user_data = $SHBuiltin.extern_c({}, function wl_display_get_user_data(_wl_display: c_ptr): c_ptr { throw 0; });
const _wl_display_get_version = $SHBuiltin.extern_c({}, function wl_display_get_version(_wl_display: c_ptr): c_uint { throw 0; });
const _wl_display_sync = $SHBuiltin.extern_c({}, function wl_display_sync(_wl_display: c_ptr): c_ptr { throw 0; });
const _wl_display_get_registry = $SHBuiltin.extern_c({}, function wl_display_get_registry(_wl_display: c_ptr): c_ptr { throw 0; });
const _wl_registry_add_listener = $SHBuiltin.extern_c({}, function wl_registry_add_listener(_wl_registry: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_registry_set_user_data = $SHBuiltin.extern_c({}, function wl_registry_set_user_data(_wl_registry: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_registry_get_user_data = $SHBuiltin.extern_c({}, function wl_registry_get_user_data(_wl_registry: c_ptr): c_ptr { throw 0; });
const _wl_registry_get_version = $SHBuiltin.extern_c({}, function wl_registry_get_version(_wl_registry: c_ptr): c_uint { throw 0; });
const _wl_registry_destroy = $SHBuiltin.extern_c({}, function wl_registry_destroy(_wl_registry: c_ptr): void { throw 0; });
const _wl_registry_bind = $SHBuiltin.extern_c({}, function wl_registry_bind(_wl_registry: c_ptr, _name: c_uint, _interface: c_ptr, _version: c_uint): c_ptr { throw 0; });
const _wl_callback_add_listener = $SHBuiltin.extern_c({}, function wl_callback_add_listener(_wl_callback: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_callback_set_user_data = $SHBuiltin.extern_c({}, function wl_callback_set_user_data(_wl_callback: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_callback_get_user_data = $SHBuiltin.extern_c({}, function wl_callback_get_user_data(_wl_callback: c_ptr): c_ptr { throw 0; });
const _wl_callback_get_version = $SHBuiltin.extern_c({}, function wl_callback_get_version(_wl_callback: c_ptr): c_uint { throw 0; });
const _wl_callback_destroy = $SHBuiltin.extern_c({}, function wl_callback_destroy(_wl_callback: c_ptr): void { throw 0; });
const _wl_compositor_set_user_data = $SHBuiltin.extern_c({}, function wl_compositor_set_user_data(_wl_compositor: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_compositor_get_user_data = $SHBuiltin.extern_c({}, function wl_compositor_get_user_data(_wl_compositor: c_ptr): c_ptr { throw 0; });
const _wl_compositor_get_version = $SHBuiltin.extern_c({}, function wl_compositor_get_version(_wl_compositor: c_ptr): c_uint { throw 0; });
const _wl_compositor_destroy = $SHBuiltin.extern_c({}, function wl_compositor_destroy(_wl_compositor: c_ptr): void { throw 0; });
const _wl_compositor_create_surface = $SHBuiltin.extern_c({}, function wl_compositor_create_surface(_wl_compositor: c_ptr): c_ptr { throw 0; });
const _wl_compositor_create_region = $SHBuiltin.extern_c({}, function wl_compositor_create_region(_wl_compositor: c_ptr): c_ptr { throw 0; });
const _wl_shm_pool_set_user_data = $SHBuiltin.extern_c({}, function wl_shm_pool_set_user_data(_wl_shm_pool: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_shm_pool_get_user_data = $SHBuiltin.extern_c({}, function wl_shm_pool_get_user_data(_wl_shm_pool: c_ptr): c_ptr { throw 0; });
const _wl_shm_pool_get_version = $SHBuiltin.extern_c({}, function wl_shm_pool_get_version(_wl_shm_pool: c_ptr): c_uint { throw 0; });
const _wl_shm_pool_create_buffer = $SHBuiltin.extern_c({}, function wl_shm_pool_create_buffer(_wl_shm_pool: c_ptr, _offset: c_int, _width: c_int, _height: c_int, _stride: c_int, _format: c_uint): c_ptr { throw 0; });
const _wl_shm_pool_destroy = $SHBuiltin.extern_c({}, function wl_shm_pool_destroy(_wl_shm_pool: c_ptr): void { throw 0; });
const _wl_shm_pool_resize = $SHBuiltin.extern_c({}, function wl_shm_pool_resize(_wl_shm_pool: c_ptr, _size: c_int): void { throw 0; });
const _wl_shm_add_listener = $SHBuiltin.extern_c({}, function wl_shm_add_listener(_wl_shm: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_shm_set_user_data = $SHBuiltin.extern_c({}, function wl_shm_set_user_data(_wl_shm: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_shm_get_user_data = $SHBuiltin.extern_c({}, function wl_shm_get_user_data(_wl_shm: c_ptr): c_ptr { throw 0; });
const _wl_shm_get_version = $SHBuiltin.extern_c({}, function wl_shm_get_version(_wl_shm: c_ptr): c_uint { throw 0; });
const _wl_shm_destroy = $SHBuiltin.extern_c({}, function wl_shm_destroy(_wl_shm: c_ptr): void { throw 0; });
const _wl_shm_create_pool = $SHBuiltin.extern_c({}, function wl_shm_create_pool(_wl_shm: c_ptr, _fd: c_int, _size: c_int): c_ptr { throw 0; });
const _wl_shm_release = $SHBuiltin.extern_c({}, function wl_shm_release(_wl_shm: c_ptr): void { throw 0; });
const _wl_buffer_add_listener = $SHBuiltin.extern_c({}, function wl_buffer_add_listener(_wl_buffer: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_buffer_set_user_data = $SHBuiltin.extern_c({}, function wl_buffer_set_user_data(_wl_buffer: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_buffer_get_user_data = $SHBuiltin.extern_c({}, function wl_buffer_get_user_data(_wl_buffer: c_ptr): c_ptr { throw 0; });
const _wl_buffer_get_version = $SHBuiltin.extern_c({}, function wl_buffer_get_version(_wl_buffer: c_ptr): c_uint { throw 0; });
const _wl_buffer_destroy = $SHBuiltin.extern_c({}, function wl_buffer_destroy(_wl_buffer: c_ptr): void { throw 0; });
const _wl_data_offer_add_listener = $SHBuiltin.extern_c({}, function wl_data_offer_add_listener(_wl_data_offer: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_data_offer_set_user_data = $SHBuiltin.extern_c({}, function wl_data_offer_set_user_data(_wl_data_offer: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_data_offer_get_user_data = $SHBuiltin.extern_c({}, function wl_data_offer_get_user_data(_wl_data_offer: c_ptr): c_ptr { throw 0; });
const _wl_data_offer_get_version = $SHBuiltin.extern_c({}, function wl_data_offer_get_version(_wl_data_offer: c_ptr): c_uint { throw 0; });
const _wl_data_offer_accept = $SHBuiltin.extern_c({}, function wl_data_offer_accept(_wl_data_offer: c_ptr, _serial: c_uint, _mime_type: c_ptr): void { throw 0; });
const _wl_data_offer_receive = $SHBuiltin.extern_c({}, function wl_data_offer_receive(_wl_data_offer: c_ptr, _mime_type: c_ptr, _fd: c_int): void { throw 0; });
const _wl_data_offer_destroy = $SHBuiltin.extern_c({}, function wl_data_offer_destroy(_wl_data_offer: c_ptr): void { throw 0; });
const _wl_data_offer_finish = $SHBuiltin.extern_c({}, function wl_data_offer_finish(_wl_data_offer: c_ptr): void { throw 0; });
const _wl_data_offer_set_actions = $SHBuiltin.extern_c({}, function wl_data_offer_set_actions(_wl_data_offer: c_ptr, _dnd_actions: c_uint, _preferred_action: c_uint): void { throw 0; });
const _wl_data_source_add_listener = $SHBuiltin.extern_c({}, function wl_data_source_add_listener(_wl_data_source: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_data_source_set_user_data = $SHBuiltin.extern_c({}, function wl_data_source_set_user_data(_wl_data_source: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_data_source_get_user_data = $SHBuiltin.extern_c({}, function wl_data_source_get_user_data(_wl_data_source: c_ptr): c_ptr { throw 0; });
const _wl_data_source_get_version = $SHBuiltin.extern_c({}, function wl_data_source_get_version(_wl_data_source: c_ptr): c_uint { throw 0; });
const _wl_data_source_offer = $SHBuiltin.extern_c({}, function wl_data_source_offer(_wl_data_source: c_ptr, _mime_type: c_ptr): void { throw 0; });
const _wl_data_source_destroy = $SHBuiltin.extern_c({}, function wl_data_source_destroy(_wl_data_source: c_ptr): void { throw 0; });
const _wl_data_source_set_actions = $SHBuiltin.extern_c({}, function wl_data_source_set_actions(_wl_data_source: c_ptr, _dnd_actions: c_uint): void { throw 0; });
const _wl_data_device_add_listener = $SHBuiltin.extern_c({}, function wl_data_device_add_listener(_wl_data_device: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_data_device_set_user_data = $SHBuiltin.extern_c({}, function wl_data_device_set_user_data(_wl_data_device: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_data_device_get_user_data = $SHBuiltin.extern_c({}, function wl_data_device_get_user_data(_wl_data_device: c_ptr): c_ptr { throw 0; });
const _wl_data_device_get_version = $SHBuiltin.extern_c({}, function wl_data_device_get_version(_wl_data_device: c_ptr): c_uint { throw 0; });
const _wl_data_device_destroy = $SHBuiltin.extern_c({}, function wl_data_device_destroy(_wl_data_device: c_ptr): void { throw 0; });
const _wl_data_device_start_drag = $SHBuiltin.extern_c({}, function wl_data_device_start_drag(_wl_data_device: c_ptr, _source: c_ptr, _origin: c_ptr, _icon: c_ptr, _serial: c_uint): void { throw 0; });
const _wl_data_device_set_selection = $SHBuiltin.extern_c({}, function wl_data_device_set_selection(_wl_data_device: c_ptr, _source: c_ptr, _serial: c_uint): void { throw 0; });
const _wl_data_device_release = $SHBuiltin.extern_c({}, function wl_data_device_release(_wl_data_device: c_ptr): void { throw 0; });
const _wl_data_device_manager_set_user_data = $SHBuiltin.extern_c({}, function wl_data_device_manager_set_user_data(_wl_data_device_manager: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_data_device_manager_get_user_data = $SHBuiltin.extern_c({}, function wl_data_device_manager_get_user_data(_wl_data_device_manager: c_ptr): c_ptr { throw 0; });
const _wl_data_device_manager_get_version = $SHBuiltin.extern_c({}, function wl_data_device_manager_get_version(_wl_data_device_manager: c_ptr): c_uint { throw 0; });
const _wl_data_device_manager_destroy = $SHBuiltin.extern_c({}, function wl_data_device_manager_destroy(_wl_data_device_manager: c_ptr): void { throw 0; });
const _wl_data_device_manager_create_data_source = $SHBuiltin.extern_c({}, function wl_data_device_manager_create_data_source(_wl_data_device_manager: c_ptr): c_ptr { throw 0; });
const _wl_data_device_manager_get_data_device = $SHBuiltin.extern_c({}, function wl_data_device_manager_get_data_device(_wl_data_device_manager: c_ptr, _seat: c_ptr): c_ptr { throw 0; });
const _wl_shell_set_user_data = $SHBuiltin.extern_c({}, function wl_shell_set_user_data(_wl_shell: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_shell_get_user_data = $SHBuiltin.extern_c({}, function wl_shell_get_user_data(_wl_shell: c_ptr): c_ptr { throw 0; });
const _wl_shell_get_version = $SHBuiltin.extern_c({}, function wl_shell_get_version(_wl_shell: c_ptr): c_uint { throw 0; });
const _wl_shell_destroy = $SHBuiltin.extern_c({}, function wl_shell_destroy(_wl_shell: c_ptr): void { throw 0; });
const _wl_shell_get_shell_surface = $SHBuiltin.extern_c({}, function wl_shell_get_shell_surface(_wl_shell: c_ptr, _surface: c_ptr): c_ptr { throw 0; });
const _wl_shell_surface_add_listener = $SHBuiltin.extern_c({}, function wl_shell_surface_add_listener(_wl_shell_surface: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_shell_surface_set_user_data = $SHBuiltin.extern_c({}, function wl_shell_surface_set_user_data(_wl_shell_surface: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_shell_surface_get_user_data = $SHBuiltin.extern_c({}, function wl_shell_surface_get_user_data(_wl_shell_surface: c_ptr): c_ptr { throw 0; });
const _wl_shell_surface_get_version = $SHBuiltin.extern_c({}, function wl_shell_surface_get_version(_wl_shell_surface: c_ptr): c_uint { throw 0; });
const _wl_shell_surface_destroy = $SHBuiltin.extern_c({}, function wl_shell_surface_destroy(_wl_shell_surface: c_ptr): void { throw 0; });
const _wl_shell_surface_pong = $SHBuiltin.extern_c({}, function wl_shell_surface_pong(_wl_shell_surface: c_ptr, _serial: c_uint): void { throw 0; });
const _wl_shell_surface_move = $SHBuiltin.extern_c({}, function wl_shell_surface_move(_wl_shell_surface: c_ptr, _seat: c_ptr, _serial: c_uint): void { throw 0; });
const _wl_shell_surface_resize = $SHBuiltin.extern_c({}, function wl_shell_surface_resize(_wl_shell_surface: c_ptr, _seat: c_ptr, _serial: c_uint, _edges: c_uint): void { throw 0; });
const _wl_shell_surface_set_toplevel = $SHBuiltin.extern_c({}, function wl_shell_surface_set_toplevel(_wl_shell_surface: c_ptr): void { throw 0; });
const _wl_shell_surface_set_transient = $SHBuiltin.extern_c({}, function wl_shell_surface_set_transient(_wl_shell_surface: c_ptr, _parent: c_ptr, _x: c_int, _y: c_int, _flags: c_uint): void { throw 0; });
const _wl_shell_surface_set_fullscreen = $SHBuiltin.extern_c({}, function wl_shell_surface_set_fullscreen(_wl_shell_surface: c_ptr, _method: c_uint, _framerate: c_uint, _output: c_ptr): void { throw 0; });
const _wl_shell_surface_set_popup = $SHBuiltin.extern_c({}, function wl_shell_surface_set_popup(_wl_shell_surface: c_ptr, _seat: c_ptr, _serial: c_uint, _parent: c_ptr, _x: c_int, _y: c_int, _flags: c_uint): void { throw 0; });
const _wl_shell_surface_set_maximized = $SHBuiltin.extern_c({}, function wl_shell_surface_set_maximized(_wl_shell_surface: c_ptr, _output: c_ptr): void { throw 0; });
const _wl_shell_surface_set_title = $SHBuiltin.extern_c({}, function wl_shell_surface_set_title(_wl_shell_surface: c_ptr, _title: c_ptr): void { throw 0; });
const _wl_shell_surface_set_class = $SHBuiltin.extern_c({}, function wl_shell_surface_set_class(_wl_shell_surface: c_ptr, _class_: c_ptr): void { throw 0; });
const _wl_surface_add_listener = $SHBuiltin.extern_c({}, function wl_surface_add_listener(_wl_surface: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_surface_set_user_data = $SHBuiltin.extern_c({}, function wl_surface_set_user_data(_wl_surface: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_surface_get_user_data = $SHBuiltin.extern_c({}, function wl_surface_get_user_data(_wl_surface: c_ptr): c_ptr { throw 0; });
const _wl_surface_get_version = $SHBuiltin.extern_c({}, function wl_surface_get_version(_wl_surface: c_ptr): c_uint { throw 0; });
const _wl_surface_destroy = $SHBuiltin.extern_c({}, function wl_surface_destroy(_wl_surface: c_ptr): void { throw 0; });
const _wl_surface_attach = $SHBuiltin.extern_c({}, function wl_surface_attach(_wl_surface: c_ptr, _buffer: c_ptr, _x: c_int, _y: c_int): void { throw 0; });
const _wl_surface_damage = $SHBuiltin.extern_c({}, function wl_surface_damage(_wl_surface: c_ptr, _x: c_int, _y: c_int, _width: c_int, _height: c_int): void { throw 0; });
const _wl_surface_frame = $SHBuiltin.extern_c({}, function wl_surface_frame(_wl_surface: c_ptr): c_ptr { throw 0; });
const _wl_surface_set_opaque_region = $SHBuiltin.extern_c({}, function wl_surface_set_opaque_region(_wl_surface: c_ptr, _region: c_ptr): void { throw 0; });
const _wl_surface_set_input_region = $SHBuiltin.extern_c({}, function wl_surface_set_input_region(_wl_surface: c_ptr, _region: c_ptr): void { throw 0; });
const _wl_surface_commit = $SHBuiltin.extern_c({}, function wl_surface_commit(_wl_surface: c_ptr): void { throw 0; });
const _wl_surface_set_buffer_transform = $SHBuiltin.extern_c({}, function wl_surface_set_buffer_transform(_wl_surface: c_ptr, _transform: c_int): void { throw 0; });
const _wl_surface_set_buffer_scale = $SHBuiltin.extern_c({}, function wl_surface_set_buffer_scale(_wl_surface: c_ptr, _scale: c_int): void { throw 0; });
const _wl_surface_damage_buffer = $SHBuiltin.extern_c({}, function wl_surface_damage_buffer(_wl_surface: c_ptr, _x: c_int, _y: c_int, _width: c_int, _height: c_int): void { throw 0; });
const _wl_surface_offset = $SHBuiltin.extern_c({}, function wl_surface_offset(_wl_surface: c_ptr, _x: c_int, _y: c_int): void { throw 0; });
const _wl_seat_add_listener = $SHBuiltin.extern_c({}, function wl_seat_add_listener(_wl_seat: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_seat_set_user_data = $SHBuiltin.extern_c({}, function wl_seat_set_user_data(_wl_seat: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_seat_get_user_data = $SHBuiltin.extern_c({}, function wl_seat_get_user_data(_wl_seat: c_ptr): c_ptr { throw 0; });
const _wl_seat_get_version = $SHBuiltin.extern_c({}, function wl_seat_get_version(_wl_seat: c_ptr): c_uint { throw 0; });
const _wl_seat_destroy = $SHBuiltin.extern_c({}, function wl_seat_destroy(_wl_seat: c_ptr): void { throw 0; });
const _wl_seat_get_pointer = $SHBuiltin.extern_c({}, function wl_seat_get_pointer(_wl_seat: c_ptr): c_ptr { throw 0; });
const _wl_seat_get_keyboard = $SHBuiltin.extern_c({}, function wl_seat_get_keyboard(_wl_seat: c_ptr): c_ptr { throw 0; });
const _wl_seat_get_touch = $SHBuiltin.extern_c({}, function wl_seat_get_touch(_wl_seat: c_ptr): c_ptr { throw 0; });
const _wl_seat_release = $SHBuiltin.extern_c({}, function wl_seat_release(_wl_seat: c_ptr): void { throw 0; });
const _wl_pointer_add_listener = $SHBuiltin.extern_c({}, function wl_pointer_add_listener(_wl_pointer: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_pointer_set_user_data = $SHBuiltin.extern_c({}, function wl_pointer_set_user_data(_wl_pointer: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_pointer_get_user_data = $SHBuiltin.extern_c({}, function wl_pointer_get_user_data(_wl_pointer: c_ptr): c_ptr { throw 0; });
const _wl_pointer_get_version = $SHBuiltin.extern_c({}, function wl_pointer_get_version(_wl_pointer: c_ptr): c_uint { throw 0; });
const _wl_pointer_destroy = $SHBuiltin.extern_c({}, function wl_pointer_destroy(_wl_pointer: c_ptr): void { throw 0; });
const _wl_pointer_set_cursor = $SHBuiltin.extern_c({}, function wl_pointer_set_cursor(_wl_pointer: c_ptr, _serial: c_uint, _surface: c_ptr, _hotspot_x: c_int, _hotspot_y: c_int): void { throw 0; });
const _wl_pointer_release = $SHBuiltin.extern_c({}, function wl_pointer_release(_wl_pointer: c_ptr): void { throw 0; });
const _wl_keyboard_add_listener = $SHBuiltin.extern_c({}, function wl_keyboard_add_listener(_wl_keyboard: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_keyboard_set_user_data = $SHBuiltin.extern_c({}, function wl_keyboard_set_user_data(_wl_keyboard: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_keyboard_get_user_data = $SHBuiltin.extern_c({}, function wl_keyboard_get_user_data(_wl_keyboard: c_ptr): c_ptr { throw 0; });
const _wl_keyboard_get_version = $SHBuiltin.extern_c({}, function wl_keyboard_get_version(_wl_keyboard: c_ptr): c_uint { throw 0; });
const _wl_keyboard_destroy = $SHBuiltin.extern_c({}, function wl_keyboard_destroy(_wl_keyboard: c_ptr): void { throw 0; });
const _wl_keyboard_release = $SHBuiltin.extern_c({}, function wl_keyboard_release(_wl_keyboard: c_ptr): void { throw 0; });
const _wl_touch_add_listener = $SHBuiltin.extern_c({}, function wl_touch_add_listener(_wl_touch: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_touch_set_user_data = $SHBuiltin.extern_c({}, function wl_touch_set_user_data(_wl_touch: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_touch_get_user_data = $SHBuiltin.extern_c({}, function wl_touch_get_user_data(_wl_touch: c_ptr): c_ptr { throw 0; });
const _wl_touch_get_version = $SHBuiltin.extern_c({}, function wl_touch_get_version(_wl_touch: c_ptr): c_uint { throw 0; });
const _wl_touch_destroy = $SHBuiltin.extern_c({}, function wl_touch_destroy(_wl_touch: c_ptr): void { throw 0; });
const _wl_touch_release = $SHBuiltin.extern_c({}, function wl_touch_release(_wl_touch: c_ptr): void { throw 0; });
const _wl_output_add_listener = $SHBuiltin.extern_c({}, function wl_output_add_listener(_wl_output: c_ptr, _listener: c_ptr, _data: c_ptr): c_int { throw 0; });
const _wl_output_set_user_data = $SHBuiltin.extern_c({}, function wl_output_set_user_data(_wl_output: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_output_get_user_data = $SHBuiltin.extern_c({}, function wl_output_get_user_data(_wl_output: c_ptr): c_ptr { throw 0; });
const _wl_output_get_version = $SHBuiltin.extern_c({}, function wl_output_get_version(_wl_output: c_ptr): c_uint { throw 0; });
const _wl_output_destroy = $SHBuiltin.extern_c({}, function wl_output_destroy(_wl_output: c_ptr): void { throw 0; });
const _wl_output_release = $SHBuiltin.extern_c({}, function wl_output_release(_wl_output: c_ptr): void { throw 0; });
const _wl_region_set_user_data = $SHBuiltin.extern_c({}, function wl_region_set_user_data(_wl_region: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_region_get_user_data = $SHBuiltin.extern_c({}, function wl_region_get_user_data(_wl_region: c_ptr): c_ptr { throw 0; });
const _wl_region_get_version = $SHBuiltin.extern_c({}, function wl_region_get_version(_wl_region: c_ptr): c_uint { throw 0; });
const _wl_region_destroy = $SHBuiltin.extern_c({}, function wl_region_destroy(_wl_region: c_ptr): void { throw 0; });
const _wl_region_add = $SHBuiltin.extern_c({}, function wl_region_add(_wl_region: c_ptr, _x: c_int, _y: c_int, _width: c_int, _height: c_int): void { throw 0; });
const _wl_region_subtract = $SHBuiltin.extern_c({}, function wl_region_subtract(_wl_region: c_ptr, _x: c_int, _y: c_int, _width: c_int, _height: c_int): void { throw 0; });
const _wl_subcompositor_set_user_data = $SHBuiltin.extern_c({}, function wl_subcompositor_set_user_data(_wl_subcompositor: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_subcompositor_get_user_data = $SHBuiltin.extern_c({}, function wl_subcompositor_get_user_data(_wl_subcompositor: c_ptr): c_ptr { throw 0; });
const _wl_subcompositor_get_version = $SHBuiltin.extern_c({}, function wl_subcompositor_get_version(_wl_subcompositor: c_ptr): c_uint { throw 0; });
const _wl_subcompositor_destroy = $SHBuiltin.extern_c({}, function wl_subcompositor_destroy(_wl_subcompositor: c_ptr): void { throw 0; });
const _wl_subcompositor_get_subsurface = $SHBuiltin.extern_c({}, function wl_subcompositor_get_subsurface(_wl_subcompositor: c_ptr, _surface: c_ptr, _parent: c_ptr): c_ptr { throw 0; });
const _wl_subsurface_set_user_data = $SHBuiltin.extern_c({}, function wl_subsurface_set_user_data(_wl_subsurface: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_subsurface_get_user_data = $SHBuiltin.extern_c({}, function wl_subsurface_get_user_data(_wl_subsurface: c_ptr): c_ptr { throw 0; });
const _wl_subsurface_get_version = $SHBuiltin.extern_c({}, function wl_subsurface_get_version(_wl_subsurface: c_ptr): c_uint { throw 0; });
const _wl_subsurface_destroy = $SHBuiltin.extern_c({}, function wl_subsurface_destroy(_wl_subsurface: c_ptr): void { throw 0; });
const _wl_subsurface_set_position = $SHBuiltin.extern_c({}, function wl_subsurface_set_position(_wl_subsurface: c_ptr, _x: c_int, _y: c_int): void { throw 0; });
const _wl_subsurface_place_above = $SHBuiltin.extern_c({}, function wl_subsurface_place_above(_wl_subsurface: c_ptr, _sibling: c_ptr): void { throw 0; });
const _wl_subsurface_place_below = $SHBuiltin.extern_c({}, function wl_subsurface_place_below(_wl_subsurface: c_ptr, _sibling: c_ptr): void { throw 0; });
const _wl_subsurface_set_sync = $SHBuiltin.extern_c({}, function wl_subsurface_set_sync(_wl_subsurface: c_ptr): void { throw 0; });
const _wl_subsurface_set_desync = $SHBuiltin.extern_c({}, function wl_subsurface_set_desync(_wl_subsurface: c_ptr): void { throw 0; });
const _wl_fixes_set_user_data = $SHBuiltin.extern_c({}, function wl_fixes_set_user_data(_wl_fixes: c_ptr, _user_data: c_ptr): void { throw 0; });
const _wl_fixes_get_user_data = $SHBuiltin.extern_c({}, function wl_fixes_get_user_data(_wl_fixes: c_ptr): c_ptr { throw 0; });
const _wl_fixes_get_version = $SHBuiltin.extern_c({}, function wl_fixes_get_version(_wl_fixes: c_ptr): c_uint { throw 0; });
const _wl_fixes_destroy = $SHBuiltin.extern_c({}, function wl_fixes_destroy(_wl_fixes: c_ptr): void { throw 0; });
const _wl_fixes_destroy_registry = $SHBuiltin.extern_c({}, function wl_fixes_destroy_registry(_wl_fixes: c_ptr, _registry: c_ptr): void { throw 0; });
const _connect_to_env = $SHBuiltin.extern_c({}, function connect_to_env(): c_int { throw 0; });
const _draw_window = $SHBuiltin.extern_c({}, function draw_window(): c_int { throw 0; });
const _sizeof_wl_display_listener = 16;
const _sizeof_wl_registry_listener = 16;
const _sizeof_wl_callback_listener = 8;
const _sizeof_wl_shm_listener = 8;
const _sizeof_wl_buffer_listener = 8;
const _sizeof_wl_data_offer_listener = 24;
const _sizeof_wl_data_source_listener = 48;
const _sizeof_wl_data_device_listener = 48;
const _sizeof_wl_shell_surface_listener = 24;
const _sizeof_wl_surface_listener = 32;
const _sizeof_wl_seat_listener = 16;
const _sizeof_wl_pointer_listener = 88;
const _sizeof_wl_keyboard_listener = 48;
const _sizeof_wl_touch_listener = 56;
const _sizeof_wl_output_listener = 48;
function get_wl_display_listener_error(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_display_listener_error(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_display_listener_delete_id(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 8);
}
function set_wl_display_listener_delete_id(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 8, v);
}
function get_wl_registry_listener_global(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_registry_listener_global(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_registry_listener_global_remove(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 8);
}
function set_wl_registry_listener_global_remove(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 8, v);
}
function get_wl_callback_listener_done(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_callback_listener_done(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_shm_listener_format(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_shm_listener_format(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_buffer_listener_release(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_buffer_listener_release(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_data_offer_listener_offer(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_data_offer_listener_offer(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_data_offer_listener_source_actions(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 8);
}
function set_wl_data_offer_listener_source_actions(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 8, v);
}
function get_wl_data_offer_listener_action(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 16);
}
function set_wl_data_offer_listener_action(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 16, v);
}
function get_wl_data_source_listener_target(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_data_source_listener_target(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_data_source_listener_send(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 8);
}
function set_wl_data_source_listener_send(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 8, v);
}
function get_wl_data_source_listener_cancelled(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 16);
}
function set_wl_data_source_listener_cancelled(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 16, v);
}
function get_wl_data_source_listener_dnd_drop_performed(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 24);
}
function set_wl_data_source_listener_dnd_drop_performed(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 24, v);
}
function get_wl_data_source_listener_dnd_finished(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 32);
}
function set_wl_data_source_listener_dnd_finished(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 32, v);
}
function get_wl_data_source_listener_action(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 40);
}
function set_wl_data_source_listener_action(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 40, v);
}
function get_wl_data_device_listener_data_offer(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_data_device_listener_data_offer(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_data_device_listener_enter(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 8);
}
function set_wl_data_device_listener_enter(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 8, v);
}
function get_wl_data_device_listener_leave(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 16);
}
function set_wl_data_device_listener_leave(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 16, v);
}
function get_wl_data_device_listener_motion(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 24);
}
function set_wl_data_device_listener_motion(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 24, v);
}
function get_wl_data_device_listener_drop(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 32);
}
function set_wl_data_device_listener_drop(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 32, v);
}
function get_wl_data_device_listener_selection(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 40);
}
function set_wl_data_device_listener_selection(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 40, v);
}
function get_wl_shell_surface_listener_ping(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_shell_surface_listener_ping(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_shell_surface_listener_configure(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 8);
}
function set_wl_shell_surface_listener_configure(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 8, v);
}
function get_wl_shell_surface_listener_popup_done(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 16);
}
function set_wl_shell_surface_listener_popup_done(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 16, v);
}
function get_wl_surface_listener_enter(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_surface_listener_enter(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_surface_listener_leave(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 8);
}
function set_wl_surface_listener_leave(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 8, v);
}
function get_wl_surface_listener_preferred_buffer_scale(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 16);
}
function set_wl_surface_listener_preferred_buffer_scale(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 16, v);
}
function get_wl_surface_listener_preferred_buffer_transform(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 24);
}
function set_wl_surface_listener_preferred_buffer_transform(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 24, v);
}
function get_wl_seat_listener_capabilities(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_seat_listener_capabilities(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_seat_listener_name(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 8);
}
function set_wl_seat_listener_name(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 8, v);
}
function get_wl_pointer_listener_enter(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_pointer_listener_enter(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_pointer_listener_leave(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 8);
}
function set_wl_pointer_listener_leave(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 8, v);
}
function get_wl_pointer_listener_motion(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 16);
}
function set_wl_pointer_listener_motion(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 16, v);
}
function get_wl_pointer_listener_button(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 24);
}
function set_wl_pointer_listener_button(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 24, v);
}
function get_wl_pointer_listener_axis(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 32);
}
function set_wl_pointer_listener_axis(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 32, v);
}
function get_wl_pointer_listener_frame(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 40);
}
function set_wl_pointer_listener_frame(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 40, v);
}
function get_wl_pointer_listener_axis_source(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 48);
}
function set_wl_pointer_listener_axis_source(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 48, v);
}
function get_wl_pointer_listener_axis_stop(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 56);
}
function set_wl_pointer_listener_axis_stop(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 56, v);
}
function get_wl_pointer_listener_axis_discrete(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 64);
}
function set_wl_pointer_listener_axis_discrete(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 64, v);
}
function get_wl_pointer_listener_axis_value120(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 72);
}
function set_wl_pointer_listener_axis_value120(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 72, v);
}
function get_wl_pointer_listener_axis_relative_direction(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 80);
}
function set_wl_pointer_listener_axis_relative_direction(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 80, v);
}
function get_wl_keyboard_listener_keymap(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_keyboard_listener_keymap(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_keyboard_listener_enter(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 8);
}
function set_wl_keyboard_listener_enter(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 8, v);
}
function get_wl_keyboard_listener_leave(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 16);
}
function set_wl_keyboard_listener_leave(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 16, v);
}
function get_wl_keyboard_listener_key(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 24);
}
function set_wl_keyboard_listener_key(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 24, v);
}
function get_wl_keyboard_listener_modifiers(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 32);
}
function set_wl_keyboard_listener_modifiers(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 32, v);
}
function get_wl_keyboard_listener_repeat_info(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 40);
}
function set_wl_keyboard_listener_repeat_info(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 40, v);
}
function get_wl_touch_listener_down(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_touch_listener_down(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_touch_listener_up(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 8);
}
function set_wl_touch_listener_up(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 8, v);
}
function get_wl_touch_listener_motion(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 16);
}
function set_wl_touch_listener_motion(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 16, v);
}
function get_wl_touch_listener_frame(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 24);
}
function set_wl_touch_listener_frame(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 24, v);
}
function get_wl_touch_listener_cancel(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 32);
}
function set_wl_touch_listener_cancel(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 32, v);
}
function get_wl_touch_listener_shape(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 40);
}
function set_wl_touch_listener_shape(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 40, v);
}
function get_wl_touch_listener_orientation(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 48);
}
function set_wl_touch_listener_orientation(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 48, v);
}
function get_wl_output_listener_geometry(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 0);
}
function set_wl_output_listener_geometry(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 0, v);
}
function get_wl_output_listener_mode(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 8);
}
function set_wl_output_listener_mode(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 8, v);
}
function get_wl_output_listener_done(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 16);
}
function set_wl_output_listener_done(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 16, v);
}
function get_wl_output_listener_scale(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 24);
}
function set_wl_output_listener_scale(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 24, v);
}
function get_wl_output_listener_name(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 32);
}
function set_wl_output_listener_name(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 32, v);
}
function get_wl_output_listener_description(s: c_ptr): c_ptr {
  "inline";
  return _sh_ptr_read_c_ptr(s, 40);
}
function set_wl_output_listener_description(s: c_ptr, v: c_ptr): void {
  "inline";
  _sh_ptr_write_c_ptr(s, 40, v);
}
