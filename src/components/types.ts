// types.ts
// Region types
export enum RegionType {
  CLUSTER = 'CLUSTER',
  AZ = 'AZ',
  RACK = 'RACK',
  NODE = 'NODE',
  MACHINE = 'MACHINE',
}

// Region usage types
export enum RegionUsage {
  TRAINING = 'TRAINING',
  INFERENCE = 'INFERENCE',
  STORAGE = 'STORAGE',
}

// Hyperparameter optimization types
export enum HyperparameterOptimizationType {
  BAYESIAN_OPTIMIZATION = 'BAYESIAN_OPTIMIZATION',
  GRID_SEARCH = 'GRID_SEARCH',
  RANDOM_SEARCH = 'RANDOM_SEARCH',
}

// Model compression types
export enum ModelCompressionType {
  QUANTIZATION = 'QUANTIZATION',
  MODEL_PRUNING = 'MODEL_PRUNING',
  MODEL_SHIFTING = 'MODEL_SHIFTS',

  // TODO: Add more types as needed
}

// Model deployment types
export enum ModelDeploymentType {
  REALTIME = 'REALTIME',
  BATCH = 'BATCH',
  HYBRID = 'HYBRID',

  // TODO: Add more types as needed
}

// Model serving types
export enum ModelServingType {
  REST_API = 'REST_API',
  GRPC_API = 'GRPC_API',
  MACHINE_LEARNING_SERVING = 'MACHINE_LEARNING_SERVING',
}

// Model format types
export enum ModelFormat {
  TENSORFLOW = 'TENSORFLOW',
  PYTORCH = 'PYTORCH',
  SKLEARN = 'SKLEARN',
  ONNX = 'ONNX',
}