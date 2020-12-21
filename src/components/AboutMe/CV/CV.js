import React from 'react';
import './CV.scss';
import displayLanguage from '../../../translations/translations';

const CV = () => {
	const text = displayLanguage();

	const jobsList = [
		{
			company: text.CV_job1_company,
			position: text.CV_job1_position,
			text: text.CV_job1_text,
			period: text.CV_job1_period,
			skills: {
				skill1: text.CV_job1_skill1,
				skill2: text.CV_job1_skill2,
				skill3: text.CV_job1_skill3,
				skill4: text.CV_job1_skill4,
				skill5: text.CV_job1_skill5,
			}
		},
		{
			company: text.CV_job2_company,
			position: text.CV_job2_position,
			text: text.CV_job2_text,
			period: text.CV_job2_period,
			skills: {
				skill1: text.CV_job2_skill1,
				skill2: text.CV_job2_skill2,
				skill3: text.CV_job2_skill3,
				skill4: text.CV_job2_skill4,
				skill5: text.CV_job2_skill5,
			}
		},
		{
			company: text.CV_job3_company,
			position: text.CV_job3_position,
			text: text.CV_job3_text,
			period: text.CV_job3_period,
			skills: {
				skill1: text.CV_job3_skill1,
				skill2: text.CV_job3_skill2,
				skill3: text.CV_job3_skill3,
			}
		},
		{
			company: text.CV_job4_company,
			position: text.CV_job4_position,
			text: text.CV_job4_text,
			period: text.CV_job4_period,
			skills: {
				skill1: text.CV_job4_skill1,
				skill2: text.CV_job4_skill2,
				skill3: text.CV_job4_skill3,
			}
		},
	];

	const jobListGenerator = (jobList) => {
		const output = jobList.map(el => {
			return(
				<React.Fragment>
				<div class="cd-timeline-block">
					<div class="cd-timeline-img cd-picture">
					</div>

					<div class="cd-timeline-content">
						<h2 className="timeline-company-name">{el.company}</h2>
						<div class="timeline-content-info">
							<span class="timeline-content-info-title">
								<i class="fa fa-certificate" aria-hidden="true"></i>
								{el.position}
							</span>
						<span class="timeline-content-info-date">
							<i class="fa fa-calendar-o" aria-hidden="true"></i>
							{el.period}
						</span>
					</div>
					<p>{el.text}</p>
					<ul class="content-skills">
						{Object.keys(el.skills).map(skill => {
							return(
								<li>{el.skills[skill]}</li>
							);
						})}
					</ul>
					</div>
				</div>
				</React.Fragment>
			);
		});
		return output;
	}

    return(
        <div className="cv">
			<section id="cd-timeline" class="cd-container">
				{jobListGenerator(jobsList)}
			</section>
        </div>
    );
}

export default CV;