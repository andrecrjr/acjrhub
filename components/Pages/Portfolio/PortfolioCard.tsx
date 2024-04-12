import React from "react";
import Link from "next/link";


import { PortfolioDescription, 
	PortfolioDescriptionContainer, 
	PortfolioHeader, 
	PortfolioItem, 
	PortfolioItemImage, 
	PortfolioItemList, 
	PortfolioList, PortfolioListButtons, 
	PortfolioSoon} from "./Portfolio.style";
import PortfolioData from './Portfolio.json';


const PortfolioCardsList = () => {
  return (<PortfolioList data-aos="fade-up">
				{PortfolioData.map((portfolio, index) =>{
					return(
						<>
						{ index === 0 && <PortfolioItem>
							<PortfolioItemImage bgImg="/img/unfinished.jpg" />
							<PortfolioSoon style={{ padding: '15px' }}>
								More coming soon!
							</PortfolioSoon>
						</PortfolioItem>}
						<PortfolioItem key={index}>
							{portfolio.inProgress && <span className="portfolio--wip" title="This website still being in active development">#WIP</span> || 
							<span className="portfolio--wip red">
								Not active development </span>}
							{portfolio.projectImage && <PortfolioItemImage bgImg={portfolio.projectImage} />}
							<PortfolioDescriptionContainer>
								<PortfolioHeader>{portfolio.projectName}</PortfolioHeader>
								<PortfolioDescription>
									{portfolio.projectDescription}
								</PortfolioDescription>
								
								<PortfolioItemList>
									{portfolio.projectTags.map((tag) => (
										<li key={tag}>{tag}</li>
									))}
								</PortfolioItemList>
							</PortfolioDescriptionContainer>
							{portfolio.projectURL && (
									<PortfolioListButtons>
										<Link href={portfolio.projectURL} className="button" passHref>
											<a target="_blank">
												Live View
											</a>
										</Link>
										<Link href={portfolio.githubUrl} passHref>
											<a target="_blank">
												Github
											</a>
										</Link>
									</PortfolioListButtons>
							)}
						</PortfolioItem>
						<PortfolioList data-aos="fade-up">
						
						</PortfolioList>
					</>
				)}
				)}
			</PortfolioList>);
};

export default PortfolioCardsList