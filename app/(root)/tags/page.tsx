import { getTags } from "@/lib/actions/tag.action";
import React from "react";
import { json } from "stream/consumers";

const Tags = async () => {
  const { success, data, error } = await getTags({
    page: 1,
    pageSize: 10,
    query: "",
  });

  const { tags } = data || {};

  console.log("TAGS", JSON.stringify(tags, null, 2));

  return <div>Tags</div>;
};

export default Tags;
