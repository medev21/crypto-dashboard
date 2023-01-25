import {danger, warn, fail} from 'danger'

/**
 * Check if it's a large pull request
 */
const bigPRThreshold = 600; //lines

if(danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
    warn("Big pull request, please try to keep small PRs so it's easier to review :)")
}

/**
 * Check if PR title follows expected format
 * 
 * TODO: Add checks for commit lint options
 * feat, bug, refactor, etc
 */
const prTitlePrefix = "^feat: "
const regexp = new RegExp(prTitlePrefix, "g")
if(!regexp.test(prTitlePrefix)) {
    fail("Please change the PR title format")
}
