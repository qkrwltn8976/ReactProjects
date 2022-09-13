import React from 'react'
import styled from '@emotion/styled'
import useTopRateTv from './usePopularTv'
import Card from '../../../components/Card'
import Slider from '../../../components/Slider';

const Base = styled.div`
  margin-bottom: 62px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const PopularTvSection: React.FC = () => {
    const { data, isLoading } = useTopRateTv()
    const getYear = (date: string) => date.split('-')[0]
    return (
        <Base>
            <Title>인기 상영작</Title>
            {isLoading || !data ? (
                <div>Loading...</div>
            ) : (
                <Slider>
                    {
                        data?.data.results.map(tv => (

                            <Card
                                linkUrl={`/tv/${tv.id}`}
                                title={tv.name || ""}
                                posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
                                voteAverage={tv.vote_average || 0}
                                year={getYear(tv.first_air_date || "")}
                            />
                        ))
                    }
                </Slider>
            )}
        </Base>
    )
}

export default PopularTvSection