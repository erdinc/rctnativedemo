import React, {
    Component,
    StyleSheet,
    Text,
    ListView,
    View
} from 'react-native';

import MemberItem from './member-item';

class MembersList extends Component {

    static propTypes = {
        members: React.PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.props = props;
        this.state = {
            dataSource: ds.cloneWithRows(props.members)
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
