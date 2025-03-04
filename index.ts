import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

// images can be in format
// PNG - image/png
// JPEG - image/jpeg
// WEBP - image/webp
// HEIC - image/heic
// HEIF - image/heif

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Converts local file information to base64
function fileToGenerativePart(path: string, mimeType: string) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = `
    You are a helpful assistant that can read receipts.
    Read the receipt and return a JSON object with the following fields:
    totalAmount: the total amount of the receipt
    date: the date of the receipt
    vendor: the vendor of the receipt
    items: an array of objects with the following fields:
      name: the name of the item
      price: the price of the item
      quantity: the quantity of the item
    `;
  const image = fileToGenerativePart("test.jpeg", "image/jpeg");

  const generatedContent = await model.generateContent([prompt, image]);

  console.log(generatedContent.response.text());
}

run();
