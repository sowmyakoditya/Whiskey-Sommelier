﻿import React, { Component } from 'react';
import $ from 'jquery';
import '../Global.css';


export class TastingIntro extends Component {
    static displayName = TastingIntro.name;

    componentDidMount() {
        // initialize accordion functionality
        $('.accordion dt').on('click', function () {
            $(this).toggleClass('open');
            $(this).next('.inner').slideToggle();
        });
    }

    render() {
        return (
            <div className="tastingBackground">
                <div className="globalWrapper">
                    <div className="tastingBackground2">
                        <h1 className="homeh1">Introduction to Whiskey Tasting</h1>
                        <p>If you're new to whiskey tasting, here's the info you need to start:</p>


                        <dl className="accordion">
                            <dt>Terminology <div></div></dt>
                            <dd>
                                <div className="inner">
                                    <p>Flight: A selection of whiskeys to taste.</p>
                                    <br />
                                    <p>Palette: The range of tastes associated with a given whiskey.</p>
                                    <br />
                                    <p>Nose: The smell of a given whiskey.</p>
                                    <br />
                                    <p>Finish: The taste which comes after swallowing the whiskey, also called the aftertaste.</p>
                                </div>
                            </dd>
                            <br />
                            <dt>Whiskey Selection<div></div></dt>
                            <dd>
                                <div className="inner">
                                    <p>Choose a selection of three to seven whiskeys. A variety from the same region, or a mixture of regions can be explored. When choosing the order in which to drink, it is a good idea to save the stronger whiskeys for later. If you drink a strong tasting whiskey at the beginning of the flight, it may overpower the later tastes.</p>
                                </div>
                            </dd>

                            <br />
                            <dt>Glassware<div></div></dt>
                            <dd>
                                <div className="inner">
                                    <p>Whiskey tasting is typically done with a whiskey glass. A whiskey glass has a bulbous base, leading to a throat at the top of the glass. This is done to focus the nose which accentuates the taste, and to limit the amount of liquid sipped at a time.</p>
                                </div>
                            </dd>

                            <br />
                            <dt>Tasting Notes<div></div></dt>
                            <dd>
                                <div className="inner">
                                    <p>Tasting notes are the flavors that one can detect from a given whiskey. Often times a tasting expert from a distillery will write tasting notes on the box, bottle, or website for more commercial websites. In tasting whiskey, you engage in the pursuit of the highest resolution profile of taste that you can recognize. Try to detect as much as you can and pay attention to how the taste changes over them as the whiskey slowly reacts with oxygen.</p>
                                </div>
                            </dd>

                            <br />
                            <dt> Flavor and Nose Samples<div></div></dt>
                            <dd>
                                <div className="inner">
                                    <p>Many of the popular tastes found within whiskey can be sampled from other foods and spices. To more clearly identify a tasting note, the tasting experience can be enhanced by having samples of the corresponding fruits, sweets, spices, and in some cases even woods on hand to compare and contrast with the whiskey.</p>
                                </div>
                            </dd>

                            <br />
                            <dt>Water<div></div></dt>
                            <dd>
                                <div className="inner">
                                    <p>Water has several roles in a tasting. A single drop of water can cause a chemical reaction in some whiskeys which opens the nose and the palette. It is recommended to keep a dropper or teaspoon on hand to apply this drop. Water also serves as a palette cleanser so that the previous whiskey doesn't interfere with the upcoming one. Lastly, water dilutes the alcohol in the body and keeps tasters hydrated so as to have a safe experience.</p>
                                </div>
                            </dd>

                            <br />
                            <dt>Palette<div></div></dt>
                            <dd>
                                <div className="inner">
                                    <p>In planning a tasting, it is important to consider the kind of palette you would like to explore. A strong, smokey palette would overpower a sweet, subtle one. It can be interesting to explroe a range of tastes from the same regions or from different regions. Snacks and water can preserve or refresh the palette between tastings.</p>
                                </div>
                            </dd>

                            <br />
                            <dt>Distilling Insights<div></div></dt>
                            <dd>
                                <div className="inner">
                                    <p>There are many kinds of whiskeys in the world with different ingredients, tastes, and variations in how they are made.To better understand the whiskey's creation is to better understand the tastes that come through. Whiskey is the result of taking grains (or fruits in the case of brandy), boiling them in a brew to extract sugars and starches, introducing that brew to yeast to east the sugars and starches and generate alcohol, and distilling that product such that the alcohol is what remains. That alcohol solution is then aged in a wooden barrel. The wood imparts color and various sugars which provide taste over the aging process. Before distribution, the whiskey is diluted with water to meet legal safety standards. It is then bottled and sent out for distribution. This is the common process that all whiskeys go through. Moonshine omits the barrel aging, and other distilled spirits are made with other ingredients than fruit or grain. Every step has an impact on the final product and understanding this can enhance the tasting process for a given whiskey.</p>
                                </div>
                            </dd>
                            <br />
                            <br />
                            <br />
                            <br />
                        </dl>
                    </div>
                </div>
            </div>
        );
    }
}
