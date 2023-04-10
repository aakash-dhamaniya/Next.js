"use client";
import React, { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("Country");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(function (response) {
        response.json().then((jsonData) => {
          console.log(jsonData);
          setLoading(false);
          setCountry(jsonData.country_name);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return <div>{!loading ? country : <div>....</div>}</div>;
}
