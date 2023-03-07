import React from "react"
import Image from "next/image"
import styles from "../styles/nft_detail.module.css"
import { FaEye, FaShareAlt } from "react-icons/fa"
import { FcLike, FcApproval } from "react-icons/fc"
import { HiFire } from "react-icons/hi"
import picture from "../assets/images/king3.jpg"
import Timer from "../components/Timer"

const nft_detail = () => {
    return (
        <div className={styles.cont1}>
            <div className={styles.inside1}>
                <p style={{ fontWeight: `500`, color: `grey` }}>
                    Mutant Ape Yatch Club
                    <FcApproval style={{ float: `left`, display: `inline-block` }} />
                </p>
                <h1 style={{ fontSize: `30px`, marginTop: `3%`, fontWeight: `700` }}>
                    Mutant Ape Yatch Club #7104
                </h1>
                <div className={styles.create}>
                    <div className={styles.c1}>
                        <div className={styles.c11} />
                        <div className={styles.c111}>
                            <p style={{ fontWeight: `600` }}>Creater</p>
                            <p
                                style={{
                                    fontWeight: `700`,
                                    textDecoration: `underline`,
                                    fontSize: `13px`,
                                }}
                            >
                                0x3889a...53d6
                            </p>
                        </div>
                    </div>
                    <div className={styles.c2}>
                        <div className={styles.c22}></div>
                        <div className={styles.c222}>
                            <p style={{ fontWeight: `600` }}>Current Owner</p>
                            <p
                                style={{
                                    fontWeight: `700`,
                                    textDecoration: `underline`,
                                    fontSize: `13px`,
                                }}
                            >
                                0x3889a...53d6
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.icons}>
                    <FaEye
                        className={styles.eye1}
                        onChange={{ color: `blue` }}
                        style={{ cursor: `pointer` }}
                    />
                    <FcLike className={styles.like1} style={{ cursor: `pointer` }} />
                    <FaShareAlt className={styles.share1} style={{ cursor: `pointer` }} />
                </div>
                <div className={styles.box}>
                    <div className={styles.dis}>
                        <div className={styles.bx1}>
                            <p>Price</p>
                            <p style={{ color: `black` }}>8.99ETH</p>
                            <p>$10,917</p>
                        </div>
                        <div className={styles.bx2}>
                            <p style={{ color: `#ffc501` }}>Highest Offer</p>
                            <p style={{ color: `black` }}>6.5 wETH</p>
                            <p>
                                by{" "}
                                <font style={{ color: `black`, textDecoration: `underline` }}>
                                    0x18c6...169b
                                </font>
                            </p>
                        </div>
                    </div>
                    <div className={styles.dis1}>
                        <button className={styles.inside_btn} type="button">
                            Buy Now for 8.99 ETH
                        </button>
                        <button className={styles.inside_btn1} type="button">
                            Add to Cart
                        </button>
                        <button className={styles.inside_btn2} type="button">
                            Make Offer <HiFire style={{ color: `black` }} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.inside2}>
                <Image
                    className={styles.picture}
                    alt="Image Icon"
                    src={picture}
                    width={450}
                    height={500}
                ></Image>
                <label
                    style={{
                        color: `grey`,
                        fontWeight: `500`,
                        marginTop: `1%`,
                        textAlign: `end`,
                        marginRight: `1%`,
                    }}
                >
                    Sale Ends in
                </label>
                <Timer />
            </div>
        </div>
    )
}

export default nft_detail
