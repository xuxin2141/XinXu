
import React, { useState } from 'react';
import { Publication } from '../types';

interface PublicationCardProps {
  publication: Publication;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-slate-800 leading-tight group-hover:text-blue-700 transition-colors">
          {publication.title}
        </h3>
        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full font-medium ml-4 shrink-0">
          {publication.year}
        </span>
      </div>
      
      <p className="text-sm text-slate-600 mb-3 italic">
        {publication.authors.join(", ")}
      </p>
      
      <p className="text-sm font-medium text-slate-700 mb-4">
        {publication.journal}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {publication.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4 items-center">
        <button 
          onClick={() => setShowAbstract(!showAbstract)}
          className="text-xs text-blue-600 font-medium hover:underline"
        >
          {showAbstract ? "Hide Abstract" : "View Abstract"}
        </button>
        {publication.doi && (
          <a 
            href={`https://doi.org/${publication.doi}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-slate-500 font-medium hover:text-blue-600 flex items-center gap-1"
          >
            DOI <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        )}
      </div>
      
      {showAbstract && (
        <div className="mt-4 pt-4 border-t border-slate-100">
          <p className="text-sm text-slate-600 leading-relaxed">
            {publication.abstract}
          </p>
        </div>
      )}
    </div>
  );
};
