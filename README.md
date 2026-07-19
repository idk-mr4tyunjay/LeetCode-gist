# LeetCode Stats Gist

## Overview

This project fetches and formats your LeetCode statistics, including the number of problems solved by language, submission stats by difficulty, and user activity details such as ranking, streak, and total active days. It then outputs this information for use in a GitHub Gist or any other purpose.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- Fetches LeetCode statistics via the LeetCode GraphQL API.
- Supports multiple languages for problem-solving stats.
- Displays submission statistics categorized by difficulty (Easy, Medium, Hard).
- Includes user profile details such as global ranking, streak, and total active days.
- Formats the stats into a markdown-friendly string for easy sharing.

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/idk-mr4tyunjay/LeetCode-gist.git
   cd leetcode-gist
   ```

2. Install the required packages:

   ```bash
   npm install axios dotenv
   ```

3. Create a `.env` file in the root directory of the project and add your GitHub token and Gist ID:

   ```plaintext
   GH_TOKEN=your_github_token
   GIST_ID=your_gist_id
   LEETCODE_USERNAME=your_leetcode_username
   ```

## Usage

1. Update the necessary parameters in the `.env` file.
2. Run the script to fetch and update your LeetCode stats in the Gist:

   ```bash
   node index.js
   ```

3. The formatted stats will be updated in the specified GitHub Gist.

## Code Structure

- `index.js`: Main script for fetching and formatting stats.
- `src/leetcode.js`: Contains the function to interact with the LeetCode API.
- `src/leetcode/languageStats.js`: Contains the GraphQL queries for fetching language and submission statistics.
- `.env`: Environment variables for GitHub authentication and user settings.

## ASCII Art Gist

In addition to the stats gist, this repo keeps a second pinned gist showing an "ASCII art of the day" that rotates automatically.

- Art pieces live as plain `.txt` files in the [`art/`](art/) folder. **To add art, just drop in another `.txt` file** — no code changes needed.
- [`art.js`](art.js) picks one piece per day (deterministically, by day of the year via [`src/art/pickArt.js`](src/art/pickArt.js)) and updates the art gist.
- It runs on the same schedule as the stats gist (see the extra step in [`.github/workflows/update.yml`](.github/workflows/update.yml)).

### Setup

1. Create a second gist on GitHub (any placeholder content is fine) and copy its ID.
2. Add it as a repository secret named `ART_GIST_ID`. The existing `GH_TOKEN` secret is reused (it already has gist scope).
3. To run locally, add `ART_GIST_ID` to your `.env` and run:

   ```bash
   node art.js
   ```

## Dependencies

- `axios`: Promise-based HTTP client for the browser and Node.js.
- `dotenv`: Module to load environment variables from a `.env` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
