import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  "";

const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

export default defineConfig({
  name: "joshi-software-solutions",
  title: "Joshi Software Solutions",

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Articles")
              .icon(() => "📝")
              .child(
                S.documentList()
                  .title("Articles")
                  .filter('_type == "article"')
                  .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
              ),
            S.listItem()
              .title("Categories")
              .icon(() => "📂")
              .child(
                S.documentList()
                  .title("Categories")
                  .filter('_type == "category"')
              ),
            S.listItem()
              .title("Authors")
              .icon(() => "👤")
              .child(
                S.documentList()
                  .title("Authors")
                  .filter('_type == "author"')
              ),
            S.divider(),
            S.listItem()
              .title("Site Settings")
              .icon(() => "⚙️")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});