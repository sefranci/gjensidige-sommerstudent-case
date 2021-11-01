interface NameUrlPair {
  name: string;
  url: string;
}

export interface Ability {
  ability: NameUrlPair;
  is_hidden: boolean;
  slot: number;
}

interface Item {
  item: NameUrlPair;
}

export interface Move {
  move: NameUrlPair;
}

interface SimpleSprite {
  front_default: string;
}

interface Sprites extends SimpleSprite {
  other: OtherSprites;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: NameUrlPair;
}

interface OtherSprites {
  dream_world: SimpleSprite;
  "official-artwork": SimpleSprite;
}

interface TypeOfPokemon {
  type: NameUrlPair;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: NameUrlPair[];
  height: number;
  held_items: Item[];
  id: number;
  moves: Move[];
  name: string;
  species: NameUrlPair;
  sprites: Sprites;
  stats: Stat[];
  types: TypeOfPokemon[];
  weight: number;
}
