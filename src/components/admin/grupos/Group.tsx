import { TablaSummoned } from '@/components/announcement';
import { GroupList } from '@/components/groups';
import React from 'react';

export const Group = () => {
	return (
		<div>
			<TablaSummoned />
			<GroupList />
		</div>
	);
};
