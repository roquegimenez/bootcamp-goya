# TODO - Fix app crash

## Issues to fix

- [x] Plan approved by user
- [x] 1. Fix syntax error in `src/models/Turnos.js` (missing closing brace `}`)
- [x] 2. Created `src/models/Pacientes.js` with proper `.js` extension & removed old file (FIXED: file was empty, rewrote with full content)
- [x] 3. Created `.env` file with `database_url` and `PORT`
- [x] 4. Fix template literal in `src/controllers/turnos.controllers.js` (backticks instead of single quotes)
- [x] 5. Remove `espress` dependency from `package.json`
- [x] 6. Fix `src/middlewares/errorHandler.middlewares.js` to handle errors properly (now exports `{ errorHandler, rutaNoEncontrada }`)
- [x] 7. Update `app.js` to use destructured `{ errorHandler }` import
- [x] 8. Fix `pacientes.controllers.js` require path to `'../models/Pacientes'`
- [x] 9. Remove orphaned files (`src/models/pacientes` without extension, `src/routes/turnos.rutes.js`)

