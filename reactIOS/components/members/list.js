var MEMBERS = [
    {
        name: 'Erdinc Akkaya',
        type: 'Developer',
        joinedAt: '01.03.2016'
    },
    {
        name: 'Igor Matias',
        type: 'Developer',
        joinedAt: '01.03.2016'
    },
    {
        name: 'Maxim Kozlenko',
        type: 'Project Manager',
        joinedAt: '01.03.2016'
    },
];

import React, {
    Component,
    StyleSheet,
    Text,
    ListView,
    View
} from 'react-native';

import MemberItem from './item';

class MembersList extends Component {
    constructor() {
        super();
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(MEMBERS)
        };
    }

    selectMember(member) {
        console.log(member);
    }

    renderRow(rowData) {
        return (
            <MemberItem
                member={rowData}
                onPress={() => this.selectMember(rowData)}
            />
        );
    }

    render() {
        return (
            <ListView
                ref="list"
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)} // we need to bind this if not, ListCell's callback functions won't work.
                automaticallyAdjustContentInsets={false}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps={true}
                showsVerticalScrollIndicator={false}
            />
        )
    }
}

export default MembersList;
