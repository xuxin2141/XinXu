
import React from 'react';
import { TeamMember } from '../types';

interface MemberCardProps {
  member: TeamMember;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
      <div className="aspect-square relative overflow-hidden bg-slate-100">
        <img 
          src={member.imageUrl} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          {member.email && (
            <a href={`mailto:${member.email}`} className="text-white text-xs hover:underline truncate">
              {member.email}
            </a>
          )}
        </div>
      </div>
      <div className="p-4 text-center">
        <h4 className="font-bold text-slate-800 text-lg">{member.name}</h4>
        <p className="text-blue-600 font-medium text-xs mb-2">{member.role}</p>
        {member.researchInterests && (
          <div className="flex flex-wrap justify-center gap-1 mt-2">
            {member.researchInterests.slice(0, 2).map(interest => (
              <span key={interest} className="text-[10px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">
                {interest}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
