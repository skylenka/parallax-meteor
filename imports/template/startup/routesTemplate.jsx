import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';
import Layout from '/imports/template/components/layout/layout.jsx';
import MainPage from '/imports/template/components/mainPage/mainPage.jsx';



//main page route
FlowRouter.route('/', {
    action() {
        mount(Layout, {
            content: <MainPage />
        })
    }
});
