export interface SkillNode {
  id: string;
  label: string;
  x: number;
  y: number;
  category: 'big-data' | 'aws-devops' | 'languages' | 'testing-qa' | 'domain';
  details: string[];
}

export interface NodeConnection {
  from: string;
  to: string;
}
