import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled/macro";
import About from "../components/About";
import Evolution from "../components/Evolution";
import PokemonInfo from "../components/PokemonInfo";
import Stats from "../components/Stats";
import Tabs from "../components/Tabs";
import usePokemon from "../hooks/usePokemon";
import useSpecies from "../hooks/useSpecies";
import { PokemonResponse } from "../types";

type Params = {
    id: string;
};

type Tab = "about" | "stats" | "evolution";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const TabsWrapper = styled.div`
  margin: 24px auto 0;
`;

const DetailPage: React.FC = () => {
    const { id } = useParams<Params>();
    const [selectedTab, setSelectedTab] = useState<Tab>("about");

    const pokemonResult = usePokemon<PokemonResponse>(id);
    const speciesResult = useSpecies(id);

    const { name, types, height, weight, abilities, baseExp, stats } = useMemo(() => ({
        name: pokemonResult.data?.data.name,
        types: pokemonResult.data?.data.types,
        height: pokemonResult.data?.data.height,
        weight: pokemonResult.data?.data.weight,
        abilities: pokemonResult.data?.data.abilities,
        baseExp: pokemonResult.data?.data.base_experience,
        stats: pokemonResult.data?.data.stats
    }), [pokemonResult]); // pokemonResult가 변경될 때마다 해당 포멧몬의 상세 정보를 가져옴

    const { color, growthRate, flavorText, genderRate, isLegendary, isMythical, evolutionChainUrl } = useMemo(() => ({
        color: speciesResult.data?.data.color,
        growthRate: speciesResult.data?.data.growth_rate.name,
        flavorText: speciesResult.data?.data.flavor_text_entries[0].flavor_text,
        genderRate: speciesResult.data?.data.gender_rate,
        isLegendary: speciesResult.data?.data.is_legendary,
        isMythical: speciesResult.data?.data.is_mythical,
        evolutionChainUrl: speciesResult.data?.data.evolution_chain.url
    }), [speciesResult]);

    const handleClick = (tab: Tab) => {
        setSelectedTab(tab);
    };
    return (
        <Container>
            <PokemonInfo id={id} name={name} types={types} color={color} />
            <TabsWrapper>
                <Tabs
                    tab={selectedTab}
                    onClick={handleClick}
                    color={color}
                />
            </TabsWrapper>

            {
                selectedTab === "about" && (
                    <About
                        isLoading={pokemonResult.isLoading || speciesResult.isLoading}
                        color={color}
                        genderRate={genderRate}
                        isLegendary={isLegendary}
                        isMythical={isMythical}
                        types={types}
                        weight={weight}
                        height={height}
                        baseExp={baseExp}
                        abilities={abilities!}
                    />
                )
            }
            {
                selectedTab === "stats" && (
                    <Stats
                        isLoading={pokemonResult.isLoading || speciesResult.isLoading}
                        color={color}
                        stats={stats}
                    />
                )
            }
            {
                selectedTab === "evolution" && (
                    <Evolution
                        isLoading={pokemonResult.isLoading || speciesResult.isLoading}
                        id={id}
                        color={color}
                        url={evolutionChainUrl}
                    />
                )
            }
        </Container>
    );
};

export default DetailPage;
