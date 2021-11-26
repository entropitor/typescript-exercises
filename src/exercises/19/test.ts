import {typeAssert, IsTypeEqual} from 'type-assertions';
import {UrlParts, UrlParameters} from './index'

const homeUrl = "/"
const contactUrl = "/about-us/contact"
const companyUrl = "/company/:companyName"
const companyJobUrl = "/company/:companyName/job/:jobId"

// type HomeUrlParts = [""]
type HomeUrlParts = UrlParts<typeof homeUrl>
typeAssert<IsTypeEqual<HomeUrlParts, [""]>>();

// type ContactUrlParts = ["about-us", "contact"]
type ContactUrlParts = UrlParts<typeof contactUrl>
typeAssert<IsTypeEqual<ContactUrlParts, ["about-us", "contact"]>>();

// type CompanyUrlParts = ["company", ":companyName"]
type CompanyUrlParts = UrlParts<typeof companyUrl>
typeAssert<IsTypeEqual<CompanyUrlParts, ["company", ":companyName"]>>();

// type CompanyJobUrlParts = ["company", ":companyName", "job", ":jobId"]
type CompanyJobUrlParts = UrlParts<typeof companyJobUrl>
typeAssert<IsTypeEqual<CompanyJobUrlParts, ["company", ":companyName", "job", ":jobId"]>>();

/*
 *
 *
 *
 */

// type UrlParametersForHome = {}
type UrlParametersForHome = UrlParameters<typeof homeUrl>
typeAssert<IsTypeEqual<UrlParametersForHome, {}>>();

// type UrlParametersForContact = {}
type UrlParametersForContact = UrlParameters<typeof contactUrl>
typeAssert<IsTypeEqual<UrlParametersForContact, {}>>();

// type UrlParametersForCompanyUrl = {
//     companyName: string;
// }
type UrlParametersForCompanyUrl = UrlParameters<typeof companyUrl>
typeAssert<IsTypeEqual<UrlParametersForCompanyUrl, {companyName: string}>>();

// type UrlParametersForCompanyJobUrl = {
//     companyName: string;
//     jobId: string;
// }
type UrlParametersForCompanyJobUrl = UrlParameters<typeof companyJobUrl>
typeAssert<IsTypeEqual<UrlParametersForCompanyJobUrl, {companyName: string, jobId: string}>>();
