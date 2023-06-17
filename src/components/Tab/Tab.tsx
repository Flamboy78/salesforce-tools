import React, {FunctionComponent} from 'react';

import {IconSettings, Tabs, TabsPanel} from '@salesforce/design-system-react';

const Tab : FunctionComponent<any> = () => {
	const displayName : string = 'TabsExample';

		return (
			<div>
				<IconSettings>
				<Tabs variant="scoped" id="tabs-example-scoped">
					<TabsPanel label="Item One">Item One Content</TabsPanel>
					<TabsPanel label="Item Two">Item Two Content</TabsPanel>
					<TabsPanel label="Item Three">Item Three Content</TabsPanel>
					<TabsPanel disabled label="Disabled">
						Disabled Content
					</TabsPanel>
				</Tabs>
				</IconSettings>
			</div>
			
		);
	}

export default Tab;