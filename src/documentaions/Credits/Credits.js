import React from 'react';
import Link from './../../components/Link/Link';
import List from './../../components/List/List';
import Text from './../../components/Text/Text';
import Grid from './../../components/Grid/Grid';
import ListItem from '../../components/List/ListItem';

export default function Credits() {
  return (
    <>
      <Grid container spacing="md">
        <Text type="title" bottomSpacing="sm">
          Credits
        </Text>
        <Grid xs={10} sm={10} md={10} lg={10}>
          <Text type="p" topSpacing="3xs">
            This personal ui kit is free to use. For this UI kit to be
            available, there were many references to well established
            corporate's ui kits.
          </Text>
          <Text type="h2" topSpacing="md" bottomSpacing="sm">
            This UI Kit referenced:
          </Text>
          <List type="unordered">
            <ListItem>
              <Link
                href="https://uikit.wfp.org/docs/index.html?path=/story/getting-started-intro--page"
                target="_blank"
              >
                The World Food Programme’s (WFP) UI Kit
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://getbootstrap.com/" target="_blank">
                Bootstrap
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://mui.com/" target="_blank">
                Material UI
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}
