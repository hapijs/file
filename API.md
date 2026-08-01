## Methods

### `uniqueFilename(path, extension)`

Generate a random file name within a given path and optional extension.

- `path` - The file path within to generate a temporary file.
- `extension` - File extension.

```javascript
import { uniqueFilename } from '@hapi/file';

const fileName = uniqueFilename('/root', '.txt'); //results in 'C:\root\1580115599192-8540-61d96458412e09d9.txt'
```
