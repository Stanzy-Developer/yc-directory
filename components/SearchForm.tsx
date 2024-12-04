import React from "react";
import Form from "next/form";
import SearchResetForm from "@/components/SearchResetForm";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form" id="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input text-black"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SearchResetForm />}
        <button type="submit" className="search-btn text-white">
          {" "}
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
