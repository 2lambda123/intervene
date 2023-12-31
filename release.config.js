const noteKeywords = ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'];

module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'refactor', release: 'patch' },
          { type: 'revert', release: 'patch' },
        ],
        parserOpts: {
          noteKeywords,
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords,
        },
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
      },
    ],
    ['@semantic-release/changelog'],
    ['@semantic-release/npm'],
    ['@semantic-release/git'],
    ['@semantic-release/github'],
  ],
};
