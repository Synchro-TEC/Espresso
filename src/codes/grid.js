export default {
  example1: `<div class='sv-row'>
  <div class='sv-column'>Column</div>
</div>
<div class='sv-row'>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
</div>
<div class='sv-row'>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
</div>
<div class='sv-row'>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
</div>
<div class='sv-row'>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
</div>
<div class='sv-row'>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
</div>
  `,
  example1Apollo: `
  import React, { Component } from 'react';
  import { SvRow, SvCol } from 'syntec-apollo-11';

  class Example extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <div>
          <SvRow>
           <SvCol>Column</SvCol>
          </SvRow>
          <SvRow>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
          </SvRow>
          <SvRow>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
          </SvRow>
          <SvRow>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
          </SvRow>
          <SvRow>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
          </SvRow>
          <SvRow>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
            <SvCol>Column</SvCol>
          </SvRow>
        </div>
      );
    }
  }
  `,
  example2: `<div class='sv-row--with-gutter'>
  <div class='sv-column'>Column</div>
</div>
<div class='sv-row--with-gutter'>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
</div>
<div class='sv-row--with-gutter'>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
</div>
<div class='sv-row--with-gutter'>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
</div>
<div class='sv-row--with-gutter'>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
</div>
<div class='sv-row--with-gutter'>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
  <div class='sv-column'>Column</div>
</div>
  `,
  example3: `<div class="sv-row">
  <div class="sv-column _20">_20</div>
  <div class="sv-column _80">_80</div>
</div>

<div class="sv-row">
  <div class="sv-column _25">_25</div>
  <div class="sv-column _75">_75</div>
</div>

<div class="sv-row">
  <div class="sv-column _20">_20</div>
  <div class="sv-column _20">_20</div>
  <div class="sv-column _60">_60</div>
</div>

<div class="sv-row">
  <div class="sv-column _40">_40</div>
  <div class="sv-column _60">_60</div>
</div>
  `,
  example4: `<div class="sv-row">
  <div class="sv-column _100--fixed">100px</div>
  <div class="sv-column">column</div>
  <div class="sv-column">column</div>
</div>

<div className="sv-row">
  <div class="sv-column _150--fixed">150px</div>
  <div class="sv-column">column</div>
</div>

<div className="sv-row">
  <div class="sv-column _150--fixed">150px</div>
  <div class="sv-column _150--fixed">150px</div>
  <div class="sv-column">column</div>
</div>

<div class="sv-row">
  <div class="sv-column _200--fixed">200px</div>
  <div class="sv-column _250--fixed">250px</div>
  <div class="sv-column">column</div>
</div>

<div class="sv-row">
  <div class="sv-column _300--fixed">300px</div>
  <div class="sv-column">column</div>
</div>
  `,
  example5: `<div class="sv-row sv-ma--0">
  <div class="sv-column">Column</div>
</div>

<div class="sv-row sv-ma--0">
  <div class="sv-column">Column</div>
  <div class="sv-column">Column</div>
</div>
`,
};
