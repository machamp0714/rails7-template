import React, { useRef } from 'react';

export const Home = () => {
  const itemsRef = useRef<Map<number, HTMLLIElement>>(null!);

  const scrollToId = (id: number) => {
    const map = getMap();
    const node = map.get(id);
    node?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  return (
    <>
      <nav>
        <button onClick={() => scrollToId(0)}>Tom</button>
        <button onClick={() => scrollToId(5)}>Maru</button>
        <button onClick={() => scrollToId(9)}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img src={cat.imageUrl} alt={`Cat #${cat.id}`} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

interface Cat {
  id: number;
  imageUrl: string;
}

const catList: Array<Cat> = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `https://placekitten.com/250/200?image=${i}`,
  });
}
