# Receipt Analyzer

A Node.js application that uses Google's Gemini 1.5 Pro model to analyze receipts from images and extract structured data.

## Features

- Processes receipt images in various formats (PNG, JPEG, WEBP, HEIC, HEIF)
- Extracts key information including:
  - Total amount
  - Date
  - Vendor name
  - Itemized list with name, price, and quantity

## Prerequisites

- Node.js (v14 or higher recommended)
- Google Gemini API key

## Installation

1. Clone this repository or create a new project with the provided code
2. Install dependencies:

```bash
npm install @google/generative-ai fs
```

3. Set up your environment variables:

```bash
export GEMINI_API_KEY="your-api-key-here"
```

## Usage

1. Place your receipt image in the project directory (named `test.jpeg` or update the code to use your filename)
2. Run the script:

```bash
ts-node index.ts  # If using TypeScript
# or
node index.js     # If transpiled to JavaScript
```

3. The script will output a JSON object with the extracted receipt data

## Example Output

```json
{
  "totalAmount": 42.56,
  "date": "2023-09-15",
  "vendor": "ACME Grocery Store",
  "items": [
    {
      "name": "Milk",
      "price": 3.99,
      "quantity": 1
    },
    {
      "name": "Bread",
      "price": 2.49,
      "quantity": 2
    },
    {
      "name": "Apples",
      "price": 4.99,
      "quantity": 1
    }
  ]
}
```

## Customization

You can modify the prompt in the code to extract different information from receipts based on your needs.

## License

[MIT License](LICENSE)

## Acknowledgements

- Uses [Google's Generative AI SDK](https://github.com/google/generative-ai-js)
