import { createClient } from "redis";

const client = await createClient()
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();

  type WebsiteEvent = {url: string, id: string}

     async function xAdd({url, id}: WebsiteEvent){
     await client.xAdd(
        'betteruptime:website', '*' , {
            url,
            id
        }
    );
}

export async function xAddBulk(websites: WebsiteEvent[]): Promise<void> {
    if (!websites || websites.length === 0) {
        console.warn('No websites provided to xAddBulk');
        return;
    }
    
    for (const website of websites) {
        if (website?.url && website?.id) {
            await xAdd({
                url: website.url,
                id: website.id
            });
        }
    }
}