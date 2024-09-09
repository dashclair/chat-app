export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Добавление новой функциональности
        'fix', // Исправление багов
        'refactor', // Рефакторинг кода
        // Можно добавить другие типы коммитов, если нужно
      ],
    ],
  },
};
