import React from "react";
import { Dashboard } from "@/modules/dashboard";
import { fetchMentors } from "@/utils/api";

const page = async () => {
  const mentors = await fetchMentors();
  return <Dashboard mentors={mentors} />;
};

export default page;
