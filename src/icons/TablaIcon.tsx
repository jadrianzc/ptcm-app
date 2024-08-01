import React from 'react';

export const TablaIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.97 34.77" {...props}>
		<path
			d="M34.72 13.92v-.29H23.57V9.54h-.01V.25H11.41v8.89H.25v25.38h34.46v-20.6Zm-1 .72v18.88H23.56V14.64zM22.55 1.25v32.27H12.41V1.25zm-21.3 8.89h10.14v23.38H1.25z"
			data-name="Capa_1"
			style={{
				fill: `${props.color ?? '#f7f7f7'}`,
				stroke: `${props.color ?? '#f7f7f7'}`,
				strokeMiterlimit: 10,
				strokeWidth: '.5px',
			}}
		/>
	</svg>
);
