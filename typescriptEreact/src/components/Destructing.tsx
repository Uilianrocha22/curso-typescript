interface DestructingProps {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
}

export default function Destructing({
  title,
  content,
  commentsQty,
  tags,
}: DestructingProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty} </p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
    </div>
  );
}
