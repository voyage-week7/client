import styled from 'styled-components';

export const PhotoContainer = styled.div`
    padding: 30px 0;
    section {
        ul {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: -1.5px;
            li {
                display: block;
                padding: 1.5px;
                flex: 0 1 33.3333%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`