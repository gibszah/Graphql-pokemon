import React, { useEffect, useState } from "react";
import type { Query } from "@favware/graphql-pokemon";
import "./Pokemon.css";
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";

import Poke from "../images/poke.png";
import { HashLoader } from "react-spinners";

interface GraphQLPokemonResponse<K extends keyof Omit<Query, "__typename">> {
	data: Record<K, Omit<Query[K], "__typename">>;
}

const PokemonList = () => {
	let [loading, setLoading] = useState(true);

	const [pokemonData, setPokemonData] = useState<Array<
		Record<string, any>
	> | null>(null);

	useEffect(() => {
		const fetchPokemonData = async () => {
			const firstPokemon = await fetchPokemon("ditto");
			const secondPokemon = await fetchPokemon("pikachu");
			const thirdPokemon = await fetchPokemon("charizard");
			const fourPokemon = await fetchPokemon("revenankh");
			const fifthPokemon = await fetchPokemon("embirch");
			const sixPokemon = await fetchPokemon("flarelm");
			const sevenPokemon = await fetchPokemon("pyroak");
			const eightPokemon = await fetchPokemon("breezi");
			const ninePokemon = await fetchPokemon("fidgit");
			const tenPokemon = await fetchPokemon("voodoll");
			const elevenPokemon = await fetchPokemon("brattler");
			const twelvePokemon = await fetchPokemon("kerfluffle");
			setPokemonData([
				firstPokemon,
				secondPokemon,
				thirdPokemon,
				fourPokemon,
				fifthPokemon,
				sixPokemon,
				sevenPokemon,
				eightPokemon,
				ninePokemon,
				tenPokemon,
				elevenPokemon,
				twelvePokemon,
			]);
			setLoading(false);
		};

		fetchPokemonData();
	}, []);

	const fetchPokemon = async (pokemon: string) => {
		const res = await fetch("https://graphqlpokemon.favware.tech/v7", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: `
          {
            getPokemon(pokemon: ${pokemon}) {
               num
                sprite
                species
                color
                height
                key
                types {
                        name
                      }
                levellingRate
                baseStatsTotal
                baseStats {
                              attack
                              defense
                              hp
                              specialattack
                              specialdefense
                              speed
                            }
                abilities {
                            first {
                              desc
                            }
                          }
                flavorTexts {
                              flavor
                            }
            }
          }
        `,
			}),
		});

		const json = (await res.json()) as GraphQLPokemonResponse<"getPokemon">;

		return json.data.getPokemon;
	};

	if (!pokemonData) {
		return (
			<>
				{loading && (
					<HashLoader
						color='#36d7c7'
						style={{ textAlign: "center" }}
					/>
				)}
			</>
		);
	}
	console.log(pokemonData);

	return (
		<>
			<div className='text-center pt-1'>
				<img
					src={Poke}
					alt=' '
					style={{ textAlign: "center" }}
				/>
			</div>
			<Container className='pt-2'>
				<Row className='justify-content-md-center'>
					{pokemonData.map((pokemon) => (
						<Col
							sm={2}
							key={pokemon.id}
						>
							<Card
								style={{
									width: "15rem",
									margin: "10px",
									background: "transparent",
								}}
							>
								<Card.Img
									variant='top'
									src={pokemon.sprite}
									alt={pokemon.species}
									style={{
										width: "80px",
										height: "125px",
										alignSelf: "center",
									}}
								/>
								<Card.Body>
									<Card.Title key={pokemon.id}>{pokemon.species}</Card.Title>
									<Card.Text>{pokemon.abilities.first.desc}</Card.Text>
								</Card.Body>
								<ListGroup className='list-group-flush'>
									<ListGroup.Item key={pokemon.id}>
										<li>
											<strong>Color: </strong> {pokemon.color}
										</li>
										<li>
											<strong>Height: </strong>
											{pokemon.height}
										</li>
									</ListGroup.Item>

									<ListGroup.Item key={pokemon.id}>
										<strong>Level-Rate: </strong>
										{pokemon.levellingRate}
									</ListGroup.Item>
									<ListGroup.Item key={pokemon.id}>
										<strong>Base Stats Total: </strong>
										{pokemon.baseStatsTotal}
										<div className='m-1'>
											<li>Attack: {pokemon.baseStats.attack}</li>
											<li>Defense: {pokemon.baseStats.defense}</li>
											<li>HP: {pokemon.baseStats.hp}</li>
											<li>Special Attack: {pokemon.baseStats.specialattack}</li>
											<li>
												Special Defense: {pokemon.baseStats.specialdefense}
											</li>
											<li>Speed: {pokemon.baseStats.speed}</li>
										</div>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default PokemonList;
