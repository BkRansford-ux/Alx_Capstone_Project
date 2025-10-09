import React from "react";

export default function Footer() {
  return (
    <footer className="bg-graphite text-white text-center py-6 mt-12 border-t border-bee/20">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-bee">Creative Agency</span>. 
        All rights reserved.
      </p>
    </footer>
  );
}
