brew install swagger-codegen

swagger-codegen generate --input-spec my-blog-service.yaml --lang java --output generated-code --api-package com.blog.api --model-package com.blog.model

swagger-codegen generate -i my-blog-service.yaml -l nodejs-server -o server
