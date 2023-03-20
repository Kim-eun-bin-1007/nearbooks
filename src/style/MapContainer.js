import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 100%;
  min-height: 200px;
  height: ${(props) => props.height};

  @media (min-width: 768px) {
    min-height: 290px;
  }
`;
