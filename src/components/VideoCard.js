import React from "react";

const VideoCard = ({ data }) => {
	return (
		<div className="videoCard">
			<img alt="thumb" className="thumbImage" src={data.thumbnailUrl} />

			<div className="metaDataRow">
				<img alt="channelLogo" className="channelLogo" src={data.thumbnailUrl} />

				<div className="metaDataTextContainer">
					<div className="videoTitle">{data.title}</div>
					<div className="videoDesc">
						{data.views} • {data.uploadTime}
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard
