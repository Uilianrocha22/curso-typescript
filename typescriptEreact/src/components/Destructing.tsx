interface DestructingProps {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  // - enum
  category: category;
}

export enum category {
  js = "Javascript",
  Ts = "Tipescript",
  Py = "Python",
}

export default function Destructing({
  title,
  content,
  commentsQty,
  tags,
  category,
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
      <h4>Categoria: {category}</h4>
    </div>
  );
}
