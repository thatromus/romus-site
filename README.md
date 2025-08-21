# Astro site

# Структура проекта

```text
├── src/
│   ├── assets/ < Фотографии
│   ├── content/ < Статьи
│             ├──── about/ < файлы раздела "about me"
│                     └── cc.md <--- Файл для редактирования раздела "about me"
│             ├──── portfolio/ < файлы раздела "portfolio"
│                     └── {name}.md <--- Файл для редактирования раздела "portfolio"
```

## 🧞 Комманды для запуска

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
