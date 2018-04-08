Install swagger-codegen:

```
brew install swagger-codegen
```

Generate SDK:

```
swagger-codegen generate --input-spec my-blog-service.yaml --lang java --output generated-code --api-package com.blog.api --model-package com.blog.model
```

Generate nodejs-server:

```
swagger-codegen generate -i my-blog-service.yaml -l nodejs-server -o server
```
