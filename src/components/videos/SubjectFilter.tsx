
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Subject {
  id: string;
  name: string;
  color: string;
}

interface SubjectFilterProps {
  subjects: Subject[];
  selectedSubject: string | null;
  onSelectSubject: (subjectId: string | null) => void;
}

const SubjectFilter: React.FC<SubjectFilterProps> = ({ subjects, selectedSubject, onSelectSubject }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelectSubject(null)}
        className={cn(
          "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
          selectedSubject === null
            ? "bg-enem-primary text-white"
            : "bg-muted hover:bg-muted/80"
        )}
      >
        Todos
      </button>
      {subjects.map((subject) => (
        <button
          key={subject.id}
          onClick={() => onSelectSubject(subject.id)}
          className={cn(
            "px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5",
            selectedSubject === subject.id
              ? "bg-enem-primary text-white"
              : "bg-muted hover:bg-muted/80"
          )}
        >
          {selectedSubject === subject.id && <Check className="h-3.5 w-3.5" />}
          {subject.name}
        </button>
      ))}
    </div>
  );
};

export default SubjectFilter;
