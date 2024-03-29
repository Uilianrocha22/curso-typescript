interface FirstProps {
  title: string;
  content: string;
}

export default function FirstComponent({ title, content }: FirstProps) {
  return (
    <div>
      <h1 className="h1First">{title}</h1>
      <p>{content}</p>
    </div>
  );
}
