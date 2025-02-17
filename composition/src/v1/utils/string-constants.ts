import {
  AND_UPPER,
  ARGUMENT_DEFINITION_UPPER,
  CONSUMER_INACTIVE_THRESHOLD,
  CONSUMER_NAME,
  EDFS_KAFKA_PUBLISH,
  EDFS_KAFKA_SUBSCRIBE,
  EDFS_NATS_PUBLISH,
  EDFS_NATS_REQUEST,
  EDFS_NATS_SUBSCRIBE,
  ENUM_UPPER,
  ENUM_VALUE_UPPER,
  FIELD_DEFINITION_UPPER,
  IN_UPPER,
  INPUT_FIELD_DEFINITION_UPPER,
  INPUT_OBJECT_UPPER,
  INTERFACE_UPPER,
  NOT_UPPER,
  OBJECT_UPPER,
  OR_UPPER,
  SCALAR_UPPER,
  SCHEMA_UPPER,
  STREAM_NAME,
  UNION_UPPER,
} from '../../utils/string-constants';

export const TYPE_SYSTEM_DIRECTIVE_LOCATIONS = new Set<string>([
  ARGUMENT_DEFINITION_UPPER,
  ENUM_UPPER,
  ENUM_VALUE_UPPER,
  FIELD_DEFINITION_UPPER,
  INPUT_FIELD_DEFINITION_UPPER,
  INPUT_OBJECT_UPPER,
  INTERFACE_UPPER,
  OBJECT_UPPER,
  SCALAR_UPPER,
  SCHEMA_UPPER,
  UNION_UPPER,
]);

export const EVENT_DIRECTIVE_NAMES = new Set<string>([
  EDFS_KAFKA_PUBLISH,
  EDFS_KAFKA_SUBSCRIBE,
  EDFS_NATS_PUBLISH,
  EDFS_NATS_REQUEST,
  EDFS_NATS_SUBSCRIBE,
]);

export const STREAM_CONFIGURATION_FIELD_NAMES = new Set<string>([
  CONSUMER_INACTIVE_THRESHOLD,
  CONSUMER_NAME,
  STREAM_NAME,
]);

export const SUBSCRIPTION_FILTER_INPUT_NAMES = new Set<string>([AND_UPPER, IN_UPPER, NOT_UPPER, OR_UPPER]);
export const SUBSCRIPTION_FILTER_LIST_INPUT_NAMES = new Set<string>([AND_UPPER, OR_UPPER]);
