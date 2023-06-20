import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { name, email } = req.body;

  // Perform server-side processing
  try {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME;

    const formData = {
      Name: name,
      Email: email,
    };

    await axios.post(
      `https://api.airtable.com/v0/${baseId}/${tableName}`,
      { fields: formData },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error storing data in Airtable:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
