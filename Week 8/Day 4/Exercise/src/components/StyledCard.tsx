import styled from "styled-components";

type Theme = {
    background: string;
    color: string;
    border: string;
    bodyColor: string;
    footerColor: string;
};

type CardProps = {
    title: string;
    body: string;
    footer: string;
};

const CardWrapper = styled.div<{ theme: Theme }>`
    width: 300px;
    padding: 20px;
    border: 1px solid ${props => props.theme.border};
    border-radius: 10px;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    transition: 0.2s;

    &:hover {
        transform: translateY(-5px);
    }
`;

const Title = styled.h2`
    margin: 0 0 10px;
    font-size: 24px;
    font-weight: bold;
`;

const Body = styled.p<{ theme: Theme }>`
    margin: 0 0 15px;
    color: ${props => props.theme.bodyColor};
`;

const Footer = styled.p<{ theme: Theme }>`
    font-size: 14px;
    color: ${props => props.theme.footerColor};
`;

function StyledCard({ title, body, footer }: CardProps) {
    return (
        <CardWrapper>
            <Title>{title}</Title>
            <Body>{body}</Body>
            <Footer>{footer}</Footer>
        </CardWrapper>
    );
}

export default StyledCard;