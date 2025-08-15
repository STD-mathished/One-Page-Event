type ProgramItem = {
  time: string;            
  title: string;           
  description: string;     
  iconEmoji?: string;      
};

type Props = {
  items: ProgramItem[];
};